import React from 'react'
import { useQuery } from 'react-query';
import { constants } from '../constansts/apiConstnatns';
import PokemonListItem from './PokemonListItem';

const PokemonList = () => {
  const {data, isLoading} = useQuery("pokemon-list", async () => {
    return await fetch(constants.apiPath +"?limit=100&offset=0")
      .then(res => res.json());
  },
  {
    staleTime: 600_000,
  });

  return (
    <>
      {!isLoading && data.results.map((e: any) => <div key={e.name}>
        <PokemonListItem key={e.name} {...e}/>
      </div>)}
    </>
  )
};

export default PokemonList;
