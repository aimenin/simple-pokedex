import React from 'react'
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import PokemonListItem from './PokemonListItem';
import styles from "./PokemonList.module.css";
import { observer } from 'mobx-react-lite';
import { listFetcher } from '../Api';

const PokemonList = ({filter}: any) => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery("pokemon-list", listFetcher(),
  {
    staleTime: 600_000,
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.page + 1;
      }
    }
  });

  return (
    <>
      {!isLoading && data?.pages.map((d) => d.results.filter(filter).map((e: any) => (
        <Link to={`details/${e.name}`} key={e.name} className={styles["pokemon-link"]}>
          <PokemonListItem {...e}/>
        </Link>
      )))}

      {hasNextPage && (<button className={styles["load-more-btn"]} onClick={() => fetchNextPage()}>Load more</button>)}
    </>
  )
};

export default observer(PokemonList);
