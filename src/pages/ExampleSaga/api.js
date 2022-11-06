import { api } from "../../api/config";

export const getPokemons = () => api.get("/pokemon");
