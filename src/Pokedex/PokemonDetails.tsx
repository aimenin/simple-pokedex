import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { constants } from '../constansts/apiConstnatns';

const PokemonDetails = () => {
  const {name} = useParams<{name: string}>();

  const {data, isLoading} = useQuery(["pokemon-detail", name], async () => {
    return await fetch(constants.apiPath + "/" + name)
      .then(res => res.json());
  },
  {
    staleTime: 600_000,
  });

  return (
    <>
      {!isLoading && JSON.stringify(data)}
    </>
  )
}

export default PokemonDetails;
