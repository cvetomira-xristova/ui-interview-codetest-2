import { graphql } from "@/types";

export const GET_TEAMS = graphql(`
  query GetTeams($spaceId: ID!) {
    teams(spaceId: $spaceId) {
      id
      name
      spaceId
    }
  }
`);