import { getRecommendations } from "./services/recommendationsService";

export const resolvers = {
  Query: {
    recommendations: async () => await getRecommendations(),
  },
};
