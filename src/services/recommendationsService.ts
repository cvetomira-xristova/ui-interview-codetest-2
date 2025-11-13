import { mockRecommendations } from "../data/mockRecommendations";
import { delay } from "./utils";

export const getRecommendations = async () => {
  await delay(2000);
  return mockRecommendations;
};
