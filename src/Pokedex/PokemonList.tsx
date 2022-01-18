import React, { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import PokemonListItem from './PokemonListItem';
import styles from "./PokemonList.module.css";
import { observer } from 'mobx-react-lite';
import { listFetcher } from '../Api';
import { useStore } from '../stores';

const PokemonList = ({filter}: any) => {
  const { app } = useStore();
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery("pokemon-list", listFetcher(),
  {
    staleTime: 600_000,
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.page + 1;
      }
    }
  });

  useEffect(() => {
    window.scrollTo(0, app.scrollPostionY);
  }, [app])

  const handlePokemonClick = () => {
    app.handleScrollPositionChange(window.scrollY);
  }

  return (
    <>
      {!isLoading && data?.pages.map((d) => d.results.filter(filter).map((e: any) => (
        <Link to={`details/${e.name}`} key={e.name} className={styles["pokemon-link"]} onClick={handlePokemonClick}>
          <PokemonListItem {...e}/>
        </Link>
      )))}

      {hasNextPage && (<button className={styles["load-more-btn"]} onClick={() => fetchNextPage()}>Load more</button>)}
    </>
  )
};

export default observer(PokemonList);
