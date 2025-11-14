import { graphql } from "@/types";

export const GET_USER = graphql(`
  query GetUser {
    user {
      id
      name
      email
      avatar
      role
      spaces {
        id
        name
        avatar
        teams {
          id
          name
          spaceId
        }
      }
    }
  }
`);
