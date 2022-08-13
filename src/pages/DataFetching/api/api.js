import { api } from "../../../api/config";
export const getPoke = async () => {
  const { data } = await api.get("/pokemon");
  const pokemonRequest = data.results.map((item) => {
    return api.get(item.url).then(({ data }) => data);
  });
  const detailPoke = await Promise.all(pokemonRequest);
  return detailPoke.map((item) => {
    return {
      name: item.name,
      image: item.sprites.front_shiny,
      experience: item.base_experience,
      id: item.id,
    };
  });
};
