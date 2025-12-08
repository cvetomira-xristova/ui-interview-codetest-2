import { graphql } from "@/types";

export const GET_METRICS = graphql(`
  query GetMetrics($spaceId: ID!) {
    metrics(spaceId: $spaceId) {
      spaceId
      totalRisk {
        value
        delta
      }
      criticalExposures {
        value
        delta
      }
      compliance {
        value
        delta
      }
      speed {
        value
        delta
      }
    }
  }
`);