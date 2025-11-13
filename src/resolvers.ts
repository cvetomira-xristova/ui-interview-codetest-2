import { getMetrics } from "@/services/metricsService";
import { getRecommendations } from "@/services/recommendationsService";
import { getTeams } from "@/services/teamsService";
import { getUser } from "@/services/userService";
import { getTickets } from "./services/ticketsService";

export const resolvers = {
  Query: {
    recommendations: async () => await getRecommendations(),
    metrics: async () => await getMetrics(),
    user: async () => await getUser(),
    teams: async (_, { spaceId }: { spaceId: string }) =>
      await getTeams(spaceId),
    tickets: async (_, { spaceId }: { spaceId: string }) =>
      await getTickets(spaceId),
  },
};
