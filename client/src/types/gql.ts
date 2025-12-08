/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetMetrics($spaceId: ID!) {\n    metrics(spaceId: $spaceId) {\n      spaceId\n      totalRisk {\n        value\n        delta\n      }\n      criticalExposures {\n        value\n        delta\n      }\n      compliance {\n        value\n        delta\n      }\n      speed {\n        value\n        delta\n      }\n    }\n  }\n": typeof types.GetMetricsDocument,
    "\n  query GetRecommendations($spaceId: ID!) {\n    recommendations(spaceId: $spaceId) {\n      spaceId\n      readyToFix\n      readyToReview\n      approachingSla\n    }\n  }\n": typeof types.GetRecommendationsDocument,
    "\n  query GetReports($spaceId: ID!) {\n    reports(spaceId: $spaceId) {\n      id\n      name\n      spaceId\n    }\n  }\n": typeof types.GetReportsDocument,
    "\n  query GetTeams($spaceId: ID!) {\n    teams(spaceId: $spaceId) {\n      id\n      name\n      spaceId\n    }\n  }\n": typeof types.GetTeamsDocument,
    "\n  query GetTickets($spaceId: ID!) {\n    tickets(spaceId: $spaceId) {\n      id\n      title\n      health\n      createdAt\n      ownerId\n      progress\n      spaceId\n    }\n  }\n": typeof types.GetTicketsDocument,
    "\n  query GetUser {\n    user {\n      id\n      name\n      email\n      avatar\n      role\n      spaces {\n        id\n        name\n        avatar\n      }\n    }\n  }\n": typeof types.GetUserDocument,
};
const documents: Documents = {
    "\n  query GetMetrics($spaceId: ID!) {\n    metrics(spaceId: $spaceId) {\n      spaceId\n      totalRisk {\n        value\n        delta\n      }\n      criticalExposures {\n        value\n        delta\n      }\n      compliance {\n        value\n        delta\n      }\n      speed {\n        value\n        delta\n      }\n    }\n  }\n": types.GetMetricsDocument,
    "\n  query GetRecommendations($spaceId: ID!) {\n    recommendations(spaceId: $spaceId) {\n      spaceId\n      readyToFix\n      readyToReview\n      approachingSla\n    }\n  }\n": types.GetRecommendationsDocument,
    "\n  query GetReports($spaceId: ID!) {\n    reports(spaceId: $spaceId) {\n      id\n      name\n      spaceId\n    }\n  }\n": types.GetReportsDocument,
    "\n  query GetTeams($spaceId: ID!) {\n    teams(spaceId: $spaceId) {\n      id\n      name\n      spaceId\n    }\n  }\n": types.GetTeamsDocument,
    "\n  query GetTickets($spaceId: ID!) {\n    tickets(spaceId: $spaceId) {\n      id\n      title\n      health\n      createdAt\n      ownerId\n      progress\n      spaceId\n    }\n  }\n": types.GetTicketsDocument,
    "\n  query GetUser {\n    user {\n      id\n      name\n      email\n      avatar\n      role\n      spaces {\n        id\n        name\n        avatar\n      }\n    }\n  }\n": types.GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMetrics($spaceId: ID!) {\n    metrics(spaceId: $spaceId) {\n      spaceId\n      totalRisk {\n        value\n        delta\n      }\n      criticalExposures {\n        value\n        delta\n      }\n      compliance {\n        value\n        delta\n      }\n      speed {\n        value\n        delta\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMetrics($spaceId: ID!) {\n    metrics(spaceId: $spaceId) {\n      spaceId\n      totalRisk {\n        value\n        delta\n      }\n      criticalExposures {\n        value\n        delta\n      }\n      compliance {\n        value\n        delta\n      }\n      speed {\n        value\n        delta\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecommendations($spaceId: ID!) {\n    recommendations(spaceId: $spaceId) {\n      spaceId\n      readyToFix\n      readyToReview\n      approachingSla\n    }\n  }\n"): (typeof documents)["\n  query GetRecommendations($spaceId: ID!) {\n    recommendations(spaceId: $spaceId) {\n      spaceId\n      readyToFix\n      readyToReview\n      approachingSla\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetReports($spaceId: ID!) {\n    reports(spaceId: $spaceId) {\n      id\n      name\n      spaceId\n    }\n  }\n"): (typeof documents)["\n  query GetReports($spaceId: ID!) {\n    reports(spaceId: $spaceId) {\n      id\n      name\n      spaceId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTeams($spaceId: ID!) {\n    teams(spaceId: $spaceId) {\n      id\n      name\n      spaceId\n    }\n  }\n"): (typeof documents)["\n  query GetTeams($spaceId: ID!) {\n    teams(spaceId: $spaceId) {\n      id\n      name\n      spaceId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTickets($spaceId: ID!) {\n    tickets(spaceId: $spaceId) {\n      id\n      title\n      health\n      createdAt\n      ownerId\n      progress\n      spaceId\n    }\n  }\n"): (typeof documents)["\n  query GetTickets($spaceId: ID!) {\n    tickets(spaceId: $spaceId) {\n      id\n      title\n      health\n      createdAt\n      ownerId\n      progress\n      spaceId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser {\n    user {\n      id\n      name\n      email\n      avatar\n      role\n      spaces {\n        id\n        name\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUser {\n    user {\n      id\n      name\n      email\n      avatar\n      role\n      spaces {\n        id\n        name\n        avatar\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;