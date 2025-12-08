/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Metrics = {
  __typename?: 'Metrics';
  /** Compliance is the percentage of passing checks. */
  compliance: Compliance;
  /** Critical exposures is the number of findings that need immediate attention. */
  criticalExposures: CriticalExposures;
  /** SpaceId is the space the metrics are associated with. */
  spaceId: Scalars['ID']['output'];
  /** Speed is the average time to close critical findings in minutes. */
  speed: Speed;
  /** Total risk is the total risk score accross the entire inventory. */
  totalRisk: TotalRisk;
};

export type Query = {
  __typename?: 'Query';
  metrics: Metrics;
  recommendations: Recommendations;
  reports?: Maybe<Array<Report>>;
  teams?: Maybe<Array<Team>>;
  tickets?: Maybe<Array<Ticket>>;
  user: User;
};


export type QueryMetricsArgs = {
  spaceId: Scalars['ID']['input'];
};


export type QueryRecommendationsArgs = {
  spaceId: Scalars['ID']['input'];
};


export type QueryReportsArgs = {
  spaceId: Scalars['ID']['input'];
};


export type QueryTeamsArgs = {
  spaceId: Scalars['ID']['input'];
};


export type QueryTicketsArgs = {
  spaceId: Scalars['ID']['input'];
};

export type Recommendations = {
  __typename?: 'Recommendations';
  /** Approaching SLA is the number of tasks that are due soon. */
  approachingSla: Scalars['Int']['output'];
  /** Ready to fix is the number of findings that are ready to be fixed. */
  readyToFix: Scalars['Int']['output'];
  /** Ready to review is the number of findings that are ready to be reviewed. */
  readyToReview: Scalars['Int']['output'];
  /** SpaceId is the space the recommendations are associated with. */
  spaceId: Scalars['ID']['output'];
};

export type Report = {
  __typename?: 'Report';
  /** ID is the unique identifier for the report. */
  id: Scalars['ID']['output'];
  /** Name is the name of the report. */
  name: Scalars['String']['output'];
  /** spaceId is the space the report is associated with. */
  spaceId: Scalars['ID']['output'];
};

export type Space = {
  __typename?: 'Space';
  /** Avatar is the avatar of the space. */
  avatar: Scalars['String']['output'];
  /** ID is the unique identifier for the space. */
  id: Scalars['ID']['output'];
  /** Name is the name of the space. */
  name: Scalars['String']['output'];
  /** teams is the teams associated with the space. */
  teams?: Maybe<Array<Team>>;
};

export type Team = {
  __typename?: 'Team';
  /** ID is the unique identifier for the team. */
  id: Scalars['ID']['output'];
  /** Name is the name of the team. */
  name: Scalars['String']['output'];
  /** spaceId is the space the team is associated with. */
  spaceId: Scalars['ID']['output'];
};

export type Ticket = {
  __typename?: 'Ticket';
  /** createdAt is the date the ticket was created. */
  createdAt: Scalars['String']['output'];
  /** Health is the health of the ticket */
  health: Scalars['Float']['output'];
  /** ID is the unique identifier for the ticket. */
  id: Scalars['ID']['output'];
  /** owner is the ownerId of the ticket. */
  ownerId: Scalars['ID']['output'];
  /** Progress is the progress of the ticket in 0 to 100. */
  progress: Scalars['Float']['output'];
  /** SpaceId is the space the ticket is associated with. */
  spaceId: Scalars['ID']['output'];
  /** Title is the title of the ticket. */
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  /** Avatar is the avatar of the user. */
  avatar: Scalars['String']['output'];
  /** Email is the email of the user. */
  email: Scalars['String']['output'];
  /** ID is the unique identifier for the user. */
  id: Scalars['ID']['output'];
  /** Name is the name of the user. */
  name: Scalars['String']['output'];
  /** Role is the role of the user. */
  role: Scalars['String']['output'];
  /** spaces is the spaces the user has access to. */
  spaces: Array<Space>;
};

export type Compliance = {
  __typename?: 'compliance';
  /** Delta is the difference between the current compliance and the previous compliance. */
  delta: Scalars['Float']['output'];
  /** Value is the percentage of passing checks. */
  value: Scalars['Float']['output'];
};

export type CriticalExposures = {
  __typename?: 'criticalExposures';
  /** Delta is the difference between the current critical exposures and the previous critical exposures. */
  delta: Scalars['Int']['output'];
  /** Value is the number of critical exposures. */
  value: Scalars['Int']['output'];
};

export type Speed = {
  __typename?: 'speed';
  /** Delta is the difference between the current speed and the previous speed. */
  delta: Scalars['Float']['output'];
  /** Value is the average time to close critical findings in minutes. */
  value: Scalars['Float']['output'];
};

export type TotalRisk = {
  __typename?: 'totalRisk';
  /** Delta is the difference between the current total risk and the previous total risk. */
  delta: Scalars['Float']['output'];
  /** Value is the total risk score. */
  value: Scalars['Float']['output'];
};

export type GetMetricsQueryVariables = Exact<{
  spaceId: Scalars['ID']['input'];
}>;


export type GetMetricsQuery = { __typename?: 'Query', metrics: { __typename?: 'Metrics', spaceId: string, totalRisk: { __typename?: 'totalRisk', value: number, delta: number }, criticalExposures: { __typename?: 'criticalExposures', value: number, delta: number }, compliance: { __typename?: 'compliance', value: number, delta: number }, speed: { __typename?: 'speed', value: number, delta: number } } };

export type GetRecommendationsQueryVariables = Exact<{
  spaceId: Scalars['ID']['input'];
}>;


export type GetRecommendationsQuery = { __typename?: 'Query', recommendations: { __typename?: 'Recommendations', spaceId: string, readyToFix: number, readyToReview: number, approachingSla: number } };

export type GetReportsQueryVariables = Exact<{
  spaceId: Scalars['ID']['input'];
}>;


export type GetReportsQuery = { __typename?: 'Query', reports?: Array<{ __typename?: 'Report', id: string, name: string, spaceId: string }> | null };

export type GetTeamsQueryVariables = Exact<{
  spaceId: Scalars['ID']['input'];
}>;


export type GetTeamsQuery = { __typename?: 'Query', teams?: Array<{ __typename?: 'Team', id: string, name: string, spaceId: string }> | null };

export type GetTicketsQueryVariables = Exact<{
  spaceId: Scalars['ID']['input'];
}>;


export type GetTicketsQuery = { __typename?: 'Query', tickets?: Array<{ __typename?: 'Ticket', id: string, title: string, health: number, createdAt: string, ownerId: string, progress: number, spaceId: string }> | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, email: string, avatar: string, role: string, spaces: Array<{ __typename?: 'Space', id: string, name: string, avatar: string }> } };


export const GetMetricsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMetrics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metrics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"spaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spaceId"}},{"kind":"Field","name":{"kind":"Name","value":"totalRisk"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"delta"}}]}},{"kind":"Field","name":{"kind":"Name","value":"criticalExposures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"delta"}}]}},{"kind":"Field","name":{"kind":"Name","value":"compliance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"delta"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"delta"}}]}}]}}]}}]} as unknown as DocumentNode<GetMetricsQuery, GetMetricsQueryVariables>;
export const GetRecommendationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecommendations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recommendations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"spaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spaceId"}},{"kind":"Field","name":{"kind":"Name","value":"readyToFix"}},{"kind":"Field","name":{"kind":"Name","value":"readyToReview"}},{"kind":"Field","name":{"kind":"Name","value":"approachingSla"}}]}}]}}]} as unknown as DocumentNode<GetRecommendationsQuery, GetRecommendationsQueryVariables>;
export const GetReportsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReports"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reports"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"spaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"spaceId"}}]}}]}}]} as unknown as DocumentNode<GetReportsQuery, GetReportsQueryVariables>;
export const GetTeamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"spaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"spaceId"}}]}}]}}]} as unknown as DocumentNode<GetTeamsQuery, GetTeamsQueryVariables>;
export const GetTicketsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTickets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tickets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"spaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"spaceId"}}]}}]}}]} as unknown as DocumentNode<GetTicketsQuery, GetTicketsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"spaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;