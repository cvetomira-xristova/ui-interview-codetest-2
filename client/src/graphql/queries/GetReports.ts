import { graphql } from "@/types";

export const GET_REPORTS = graphql(`
  query GetReports($spaceId: ID!) {
    reports(spaceId: $spaceId) {
      id
      name
      spaceId
    }
  }
`);