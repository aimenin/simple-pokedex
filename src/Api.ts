export const BASE_URL = "https://pokeapi.co/api/v2";

export const detailFetcher = (name: string | undefined) => async () => {
  const details = await fetch(BASE_URL + "/pokemon/" + name).then((res) => res.json());
  const specias = await fetch(details.species.url).then((res) => res.json());

  return { ...details, names: specias.names };
}

export const listFetcher = () => async ({ pageParam = 0 }) => {
  return await fetch(BASE_URL + "/pokemon?limit=100?offset=" + pageParam * 100)
    .then((res) => res.json())
    .then((res) => ({ ...res, page: pageParam }));
}