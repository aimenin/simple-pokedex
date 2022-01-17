import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { constants } from '../constansts/apiConstnatns';
import PokemonDetails from './PokemonDetails';

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
        <Link to={`/details/${e.name}`}>
          <PokemonDetails />
        </Link>
        {e.name}
      </div>)}
    </>
  )
};

export default PokemonList;
