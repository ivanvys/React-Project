import { api } from "../../SignUp/apiForProject/config";
// const delay = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
export const getPoke = () => api.get("/products");

// await delay(2000);
// const { data } = await api.get("/pokemon");

// const pokemonRequest = data.results.map((item) => {
//   return api.get(item.url).then(({ data }) => data);
// });

// const detailPoke = await Promise.all(pokemonRequest);
// return detailPoke.map((item) => {
//   return {
//     name: item.name,
//     image: item.sprites.front_shiny,
//     experience: item.base_experience,
//     id: item.id,
//   };
// });
// };
