import { graphql } from "@/types";

export const GET_RECOMMENDATIONS = graphql(`
  query GetRecommendations($spaceId: ID!) {
    recommendations(spaceId: $spaceId) {
      spaceId
      readyToFix
      readyToReview
      approachingSla
    }
  }
`);