import { instanceRick } from "./instances";
import { RickAndMortyApi } from "./rick-and-morty-api";

const rickAndMortyApi = new RickAndMortyApi(instanceRick);

export const API = {
  rickAndMorty: rickAndMortyApi,
};
