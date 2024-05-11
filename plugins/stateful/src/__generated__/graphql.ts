/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: { input: any; output: any; }
};

export type AddUserToOrganizationInput = {
  id: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Assistant = {
  __typename?: 'Assistant';
  chat?: Maybe<Chat>;
  search?: Maybe<Search>;
};


export type AssistantChatArgs = {
  input: ChatInput;
};


export type AssistantSearchArgs = {
  input: SearchInput;
};

export type Cell = {
  __typename?: 'Cell';
  cellAttachments: Array<Maybe<CellAttachment>>;
  cellOutputs: Array<Maybe<CellOutput>>;
  id: Scalars['String']['output'];
  mainCellOutput?: Maybe<CellOutput>;
  notebook: Notebook;
  notebookId: Scalars['String']['output'];
  notebookSession?: Maybe<NotebookSession>;
  notebookSessionId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  totalOutputs?: Maybe<Scalars['Int']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type CellAttachment = {
  __typename?: 'CellAttachment';
  cell: Cell;
  cellId: Scalars['String']['output'];
  createTime: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  size: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  updateTime: Scalars['DateTime']['output'];
};

export type CellExecution = {
  __typename?: 'CellExecution';
  archivedTime?: Maybe<Scalars['DateTime']['output']>;
  autoSave: Scalars['Boolean']['output'];
  createTime: Scalars['DateTime']['output'];
  exitCode: Scalars['Int']['output'];
  history?: Maybe<Array<Maybe<CellExecution>>>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  input?: Maybe<Scalars['String']['output']>;
  inputData?: Maybe<Scalars['Bytes']['output']>;
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  languageId?: Maybe<Scalars['String']['output']>;
  lifecycleIdentityId?: Maybe<Scalars['String']['output']>;
  maskedInput?: Maybe<Scalars['String']['output']>;
  maskedStderr?: Maybe<Scalars['Bytes']['output']>;
  maskedStdout?: Maybe<Scalars['Bytes']['output']>;
  metadata?: Maybe<Metadata>;
  notebook?: Maybe<Notebook>;
  notebookId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Owner>;
  pid?: Maybe<Scalars['Int']['output']>;
  shareType?: Maybe<ShareType>;
  stderr?: Maybe<Scalars['Bytes']['output']>;
  stderrData?: Maybe<Scalars['Bytes']['output']>;
  stdout?: Maybe<Scalars['Bytes']['output']>;
  stdoutData?: Maybe<Scalars['Bytes']['output']>;
  unmaskable: Scalars['Boolean']['output'];
  updateTime?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};


export type CellExecutionHistoryArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  autoSave?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CellOutput = {
  __typename?: 'CellOutput';
  archivedTime?: Maybe<Scalars['DateTime']['output']>;
  autoSave?: Maybe<Scalars['Boolean']['output']>;
  cell: Cell;
  cellId: Scalars['String']['output'];
  cellSharings: Array<Maybe<CellSharing>>;
  createTime: Scalars['DateTime']['output'];
  exitCode: Scalars['Int']['output'];
  hasMaskedData?: Maybe<Scalars['Boolean']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  input?: Maybe<Scalars['String']['output']>;
  inputData: Scalars['Byte']['output'];
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  languageId?: Maybe<Scalars['String']['output']>;
  lifecycleIdentityId?: Maybe<Scalars['String']['output']>;
  maskedInput?: Maybe<Scalars['String']['output']>;
  maskedStderr?: Maybe<Scalars['Bytes']['output']>;
  maskedStdout?: Maybe<Scalars['Bytes']['output']>;
  metadata: Metadata;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  pid: Scalars['Int']['output'];
  shareType: ShareType;
  stderr?: Maybe<Scalars['Bytes']['output']>;
  stderrData: Scalars['Byte']['output'];
  stdout?: Maybe<Scalars['Bytes']['output']>;
  stdoutData: Scalars['Byte']['output'];
  unmaskable: Scalars['Boolean']['output'];
  updateTime: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type CellSharing = {
  __typename?: 'CellSharing';
  cellOutput: CellOutput;
  cellOutputId: Scalars['String']['output'];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  sharedBy: User;
  sharedById: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Chat = {
  __typename?: 'Chat';
  commands?: Maybe<Scalars['String']['output']>;
  hits: Array<Hit>;
  question: Scalars['String']['output'];
  response: Scalars['String']['output'];
  session?: Maybe<ChatSession>;
};

export type ChatInput = {
  executableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  question: Scalars['String']['input'];
  session?: InputMaybe<ChatSessionInput>;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  done: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type ChatSession = {
  __typename?: 'ChatSession';
  collectionName: Scalars['String']['output'];
  expiryMs?: Maybe<Scalars['Int']['output']>;
  expirySecs?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
};

export type ChatSessionInput = {
  id: Scalars['ID']['input'];
};

export type CreateCellAttachmentInput = {
  cellId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};

export type CreateCellExecutionInput = {
  archivedTime?: InputMaybe<Scalars['DateTime']['input']>;
  autoSave?: InputMaybe<Scalars['Boolean']['input']>;
  createTime?: InputMaybe<Scalars['DateTime']['input']>;
  exitCode?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  input: Scalars['Bytes']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  metadata: MetadataInput;
  notebook?: InputMaybe<CreateNotebookInput>;
  pid: Scalars['Int']['input'];
  shareType?: InputMaybe<ShareType>;
  stderr: Scalars['Bytes']['input'];
  stdout: Scalars['Bytes']['input'];
  updateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCellInput = {
  lifecycleIdentityId: Scalars['String']['input'];
  notebookId: Scalars['String']['input'];
  notebookSessionId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCellOutputInput = {
  autoSave?: InputMaybe<Scalars['Boolean']['input']>;
  exitCode: Scalars['Int']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
  inputData: Scalars['Byte']['input'];
  languageId?: InputMaybe<Scalars['String']['input']>;
  lifecycleIdentityId: Scalars['String']['input'];
  metadata: MetadataInput;
  notebookLifecycleIdentityId: Scalars['String']['input'];
  pid: Scalars['Int']['input'];
  runmeVersion?: InputMaybe<Scalars['String']['input']>;
  shareType?: InputMaybe<ShareType>;
  stderrData: Scalars['Byte']['input'];
  stdoutData: Scalars['Byte']['input'];
};

export type CreateCellSharingInput = {
  cellOutputId: Scalars['String']['input'];
  groupId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  sharedById: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEnvironmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type CreateGithubInstallationInput = {
  accountAvatarUrl: Scalars['String']['input'];
  accountId: Scalars['Int']['input'];
  accountName: Scalars['String']['input'];
  appId: Scalars['Int']['input'];
  appSlug: Scalars['String']['input'];
  installationId: Scalars['Int']['input'];
  permissions: Scalars['JSON']['input'];
  repositorySelection: Scalars['String']['input'];
  suspendedAt?: InputMaybe<Scalars['DateTime']['input']>;
  suspendedBy?: InputMaybe<Scalars['String']['input']>;
  targetId: Scalars['Int']['input'];
  targetType: GithubTargetType;
  userId: Scalars['String']['input'];
};

export type CreateGroupInput = {
  name: Scalars['String']['input'];
  userIds: Array<InputMaybe<Scalars['String']['input']>>;
};

export type CreateGroupUserInput = {
  groupId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateLogInput = {
  data: Scalars['JSON']['input'];
  type: LogTypeEnum;
};

export type CreateLogTypeInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateNotebookInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  runmeVersion?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNotebookSessionInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  notebookId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type CreateOrganizationInput = {
  name: Scalars['String']['input'];
};

export type CreateOrganizationUserInput = {
  email: Scalars['String']['input'];
};

export type CreateSlackInstallationInput = {
  appId: Scalars['String']['input'];
  data: Scalars['JSON']['input'];
  defaultChannelId?: InputMaybe<Scalars['String']['input']>;
  defaultChannelName?: InputMaybe<Scalars['String']['input']>;
  scopes: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
  teamName: Scalars['String']['input'];
  token: Scalars['Bytes']['input'];
  tokenType?: InputMaybe<SlackTokenType>;
  userId: Scalars['String']['input'];
};

export type CreateUserInput = {
  auth0Id?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firebaseRefreshTime?: InputMaybe<Scalars['DateTime']['input']>;
  githubId?: InputMaybe<Scalars['String']['input']>;
  githubRefreshTime?: InputMaybe<Scalars['DateTime']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleRefreshTime?: InputMaybe<Scalars['DateTime']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  microsoftId?: InputMaybe<Scalars['String']['input']>;
  microsoftRefreshTime?: InputMaybe<Scalars['DateTime']['input']>;
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  signupOrigin?: InputMaybe<SignupOrigin>;
  siteAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  siteUrl?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkflowInput = {
  fileName: Scalars['String']['input'];
  githubInstallationId?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
  repository: Scalars['String']['input'];
};

export type DeleteOrganizationUserInput = {
  userId: Scalars['String']['input'];
};

export type DocMetadata = {
  __typename?: 'DocMetadata';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Environment = {
  __typename?: 'Environment';
  createTime: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  notebookSessions: Array<Maybe<NotebookSession>>;
  organization: Organization;
  organizationId: Scalars['String']['output'];
  updateTime: Scalars['DateTime']['output'];
};

export type GithubInstallation = {
  __typename?: 'GithubInstallation';
  accountAvatarUrl: Scalars['String']['output'];
  accountId: Scalars['Int']['output'];
  accountName: Scalars['String']['output'];
  appId: Scalars['Int']['output'];
  appSlug: Scalars['String']['output'];
  createTime: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  installationId: Scalars['Int']['output'];
  permissions: GithubInstallationPermissions;
  repositorySelection: Scalars['String']['output'];
  suspendedAt?: Maybe<Scalars['DateTime']['output']>;
  suspendedBy?: Maybe<Scalars['String']['output']>;
  syncingState?: Maybe<SyncingStateEnum>;
  targetId: Scalars['Int']['output'];
  targetType: GithubTargetType;
  updateTime: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type GithubInstallationPermissions = {
  __typename?: 'GithubInstallationPermissions';
  contents?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
};

export type GithubMarkdown = {
  __typename?: 'GithubMarkdown';
  git_url: Scalars['String']['output'];
  html_url: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  repository: GithubRepository;
  sha: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GithubRepository = {
  __typename?: 'GithubRepository';
  description?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  html_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<GithubRepositoryOwner>;
  url?: Maybe<Scalars['String']['output']>;
};

export type GithubRepositoryOwner = {
  __typename?: 'GithubRepositoryOwner';
  avatar_url?: Maybe<Scalars['String']['output']>;
  gravatar_id?: Maybe<Scalars['String']['output']>;
  html_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum GithubTargetType {
  GithubOrganization = 'GITHUB_ORGANIZATION',
  GithubUser = 'GITHUB_USER'
}

export type Group = {
  __typename?: 'Group';
  createTime: Scalars['DateTime']['output'];
  groupUsers: Array<Maybe<GroupUser>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['String']['output'];
  updateTime: Scalars['DateTime']['output'];
};

export type GroupUser = {
  __typename?: 'GroupUser';
  group: Group;
  groupId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type HandleGithubInstallationInput = {
  installationId: Scalars['Int']['input'];
  setupAction: Scalars['String']['input'];
};

export type Hit = {
  __typename?: 'Hit';
  distance?: Maybe<Scalars['Float']['output']>;
  document: Scalars['String']['output'];
  metadata: Array<DocMetadata>;
};

export type Log = {
  __typename?: 'Log';
  createTime: Scalars['DateTime']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  logType: LogType;
  user: User;
  userId: Scalars['String']['output'];
};

export type LogType = {
  __typename?: 'LogType';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logs: Array<Maybe<Log>>;
  name: Scalars['String']['output'];
};

export enum LogTypeEnum {
  Crae = 'crae',
  Cre = 'cre',
  Crf = 'crf',
  Crs = 'crs',
  Crse = 'crse'
}

export type Metadata = {
  __typename?: 'Metadata';
  category?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['Float']['output']>;
  exitType?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['Float']['output']>;
};

export type MetadataInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  exitType?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserToOrganization: Organization;
  archiveCellExecution?: Maybe<CellExecution>;
  archiveCellOutput: CellOutput;
  createCellAttachment: CellAttachment;
  createCellExecution: CellExecution;
  createCellOutput: CellOutput;
  createCellSharing: CellSharing;
  createEnvironment: Environment;
  createGroup: Group;
  createNotebookSession: NotebookSession;
  createOrganization: Organization;
  createOrganizationUser: OrganizationUser;
  deleteCellAttachment: CellAttachment;
  deleteCellOutput: CellOutput;
  deleteCellSharing: CellSharing;
  deleteEnvironment: Environment;
  deleteGroup: Group;
  deleteNotebookSession: NotebookSession;
  deleteOrganization: Organization;
  deleteOrganizationUser: OrganizationUser;
  handleGithubInstallation: GithubInstallation;
  removeUserFromOrganization: Organization;
  syncGithubInstallation: GithubInstallation;
  unArchiveCellExecution?: Maybe<CellExecution>;
  unArchiveCellOutput: CellOutput;
  updateCellAttachment: CellAttachment;
  updateCellExecution: CellExecution;
  updateCellOutput: CellOutput;
  updateCellSharing: CellSharing;
  updateEnvironment: Environment;
  updateGroup: Group;
  updateNotebookSession: NotebookSession;
  updateOrganization: Organization;
  updateSlackInstallation: SlackInstallation;
};


export type MutationAddUserToOrganizationArgs = {
  input: AddUserToOrganizationInput;
};


export type MutationArchiveCellExecutionArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationArchiveCellOutputArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationCreateCellAttachmentArgs = {
  input: CreateCellAttachmentInput;
};


export type MutationCreateCellExecutionArgs = {
  input: CreateCellExecutionInput;
};


export type MutationCreateCellOutputArgs = {
  input: CreateCellOutputInput;
};


export type MutationCreateCellSharingArgs = {
  input: CreateCellSharingInput;
};


export type MutationCreateEnvironmentArgs = {
  input: CreateEnvironmentInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateNotebookSessionArgs = {
  input: CreateNotebookSessionInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreateOrganizationUserArgs = {
  input: CreateOrganizationUserInput;
};


export type MutationDeleteCellAttachmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCellOutputArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCellSharingArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEnvironmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNotebookSessionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrganizationUserArgs = {
  input: DeleteOrganizationUserInput;
};


export type MutationHandleGithubInstallationArgs = {
  input: HandleGithubInstallationInput;
};


export type MutationRemoveUserFromOrganizationArgs = {
  input: RemoveUserFromOrganization;
};


export type MutationUnArchiveCellExecutionArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUnArchiveCellOutputArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateCellAttachmentArgs = {
  id: Scalars['String']['input'];
  input: UpdateCellAttachmentInput;
};


export type MutationUpdateCellExecutionArgs = {
  id: Scalars['String']['input'];
  input: UpdateCellExecutionInput;
  notifySlack?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCellOutputArgs = {
  id: Scalars['String']['input'];
  input: UpdateCellOutputInput;
};


export type MutationUpdateCellSharingArgs = {
  id: Scalars['String']['input'];
  input: UpdateCellSharingInput;
};


export type MutationUpdateEnvironmentArgs = {
  id: Scalars['String']['input'];
  input: UpdateEnvironmentInput;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['String']['input'];
  input: UpdateGroupInput;
};


export type MutationUpdateNotebookSessionArgs = {
  id: Scalars['String']['input'];
  input: UpdateNotebookSessionInput;
};


export type MutationUpdateOrganizationArgs = {
  id: Scalars['String']['input'];
  input: UpdateOrganizationInput;
};


export type MutationUpdateSlackInstallationArgs = {
  input: UpdateSlackInstallationInput;
};

export type Notebook = {
  __typename?: 'Notebook';
  cells?: Maybe<Array<Maybe<Cell>>>;
  createTime?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  runmeVersion?: Maybe<Scalars['String']['output']>;
  updateTime?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type NotebookSession = {
  __typename?: 'NotebookSession';
  cells: Array<Maybe<Cell>>;
  createTime: Scalars['DateTime']['output'];
  environment?: Maybe<Environment>;
  environmentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  notebook: Notebook;
  notebookId: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['String']['output'];
  updateTime: Scalars['DateTime']['output'];
};

export type Organization = {
  __typename?: 'Organization';
  createTime: Scalars['DateTime']['output'];
  groups: Array<Maybe<Group>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationUsers: Array<Maybe<OrganizationUser>>;
  updateTime: Scalars['DateTime']['output'];
};

export type OrganizationUser = {
  __typename?: 'OrganizationUser';
  id: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Owner = {
  __typename?: 'Owner';
  bio?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  photoUrl?: Maybe<Scalars['String']['output']>;
  siteUrl?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export type PaginatedLogs = {
  __typename?: 'PaginatedLogs';
  data: Array<Log>;
  meta: PaginationMeta;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  totalPages: Scalars['Int']['output'];
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  assistant?: Maybe<Assistant>;
  cell?: Maybe<Cell>;
  cellAttachment?: Maybe<CellAttachment>;
  cellAttachments: Array<CellAttachment>;
  cellOutput?: Maybe<CellOutput>;
  cellOutputs: Array<CellOutput>;
  cellSharing?: Maybe<CellSharing>;
  cellSharings: Array<CellSharing>;
  cells: Array<Cell>;
  environment?: Maybe<Environment>;
  environments: Array<Environment>;
  getSlackChannels?: Maybe<Array<Maybe<SlackChannel>>>;
  githubInstallation?: Maybe<GithubInstallation>;
  group?: Maybe<Group>;
  groupUser?: Maybe<GroupUser>;
  groupUsers: Array<GroupUser>;
  groups: Array<Group>;
  log?: Maybe<Log>;
  logTypes: Array<LogType>;
  logs: PaginatedLogs;
  me?: Maybe<User>;
  notebookSession?: Maybe<NotebookSession>;
  notebookSessions: Array<NotebookSession>;
  organization?: Maybe<Organization>;
  organizations: Array<Organization>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  slackInstallation?: Maybe<SlackInstallation>;
  total: Scalars['Int']['output'];
  totalActive: Scalars['Int']['output'];
  totalArchived: Scalars['Int']['output'];
  workflows: Array<Workflow>;
};


/** About the Redwood queries. */
export type QueryCellArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryCellAttachmentArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryCellOutputArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryCellSharingArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryCellsArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  autoSave?: InputMaybe<Scalars['Boolean']['input']>;
};


/** About the Redwood queries. */
export type QueryEnvironmentArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryGroupArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryGroupUserArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryLogArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryLogsArgs = {
  filters?: InputMaybe<Scalars['JSON']['input']>;
  page: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
};


/** About the Redwood queries. */
export type QueryNotebookSessionArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryOrganizationArgs = {
  id: Scalars['String']['input'];
};


/** About the Redwood queries. */
export type QueryTotalArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']['output']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']['output']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']['output']>;
};

export type RemoveUserFromOrganization = {
  id: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Search = {
  __typename?: 'Search';
  hits: Array<Hit>;
  query: Scalars['String']['output'];
  stdev?: Maybe<Scalars['Float']['output']>;
};

export type SearchInput = {
  exclusion?: InputMaybe<Scalars['Boolean']['input']>;
  executableOnly?: InputMaybe<Scalars['Boolean']['input']>;
  expect?: InputMaybe<Scalars['Int']['input']>;
  metadataKeys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  query: Scalars['String']['input'];
};

export enum ShareType {
  Organization = 'ORGANIZATION',
  Public = 'PUBLIC',
  Restricted = 'RESTRICTED'
}

export enum SignupOrigin {
  RunmeApp = 'RUNME_APP',
  RunmeCli = 'RUNME_CLI',
  RunmeFirebase = 'RUNME_FIREBASE',
  RunmeVscode = 'RUNME_VSCODE',
  Unknown = 'UNKNOWN'
}

export type SlackChannel = {
  __typename?: 'SlackChannel';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SlackInstallation = {
  __typename?: 'SlackInstallation';
  appId: Scalars['String']['output'];
  createTime: Scalars['DateTime']['output'];
  data: Scalars['JSON']['output'];
  defaultChannelId?: Maybe<Scalars['String']['output']>;
  defaultChannelName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  scopes: Scalars['String']['output'];
  teamId: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
  token: Scalars['Bytes']['output'];
  tokenType?: Maybe<SlackTokenType>;
  updateTime: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export enum SlackTokenType {
  SlackBot = 'SLACK_BOT',
  SlackUser = 'SLACK_USER'
}

export type Subscription = {
  __typename?: 'Subscription';
  chat?: Maybe<ChatMessage>;
};

export enum SyncingStateEnum {
  Error = 'ERROR',
  Synced = 'SYNCED',
  Syncing = 'SYNCING'
}

export type UpdateCellAttachmentInput = {
  cellId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCellExecutionInput = {
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCellInput = {
  lifecycleIdentityId?: InputMaybe<Scalars['String']['input']>;
  notebookId?: InputMaybe<Scalars['String']['input']>;
  notebookSessionId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCellOutputInput = {
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notify?: InputMaybe<Scalars['Boolean']['input']>;
  shareType: ShareType;
  unmaskable?: InputMaybe<Scalars['Boolean']['input']>;
  userEmails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateCellSharingInput = {
  cellOutputId?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  sharedById?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEnvironmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGithubInstallationInput = {
  accountAvatarUrl?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['Int']['input']>;
  accountName?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<Scalars['Int']['input']>;
  appSlug?: InputMaybe<Scalars['String']['input']>;
  installationId?: InputMaybe<Scalars['Int']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  repositorySelection?: InputMaybe<Scalars['String']['input']>;
  suspendedAt?: InputMaybe<Scalars['DateTime']['input']>;
  suspendedBy?: InputMaybe<Scalars['String']['input']>;
  targetId?: InputMaybe<Scalars['Int']['input']>;
  targetType?: InputMaybe<GithubTargetType>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGroupInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateGroupUserInput = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLogInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<LogTypeEnum>;
};

export type UpdateLogTypeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotebookInput = {
  id: Scalars['String']['input'];
  lifecycleIdentityId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotebookSessionInput = {
  environmentId?: InputMaybe<Scalars['String']['input']>;
  notebookId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrganizationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrganizationUserInput = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSlackInstallationInput = {
  defaultChannelId?: InputMaybe<Scalars['String']['input']>;
  defaultChannelName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  auth0Id?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  firebaseRefreshTime?: InputMaybe<Scalars['DateTime']['input']>;
  githubId?: InputMaybe<Scalars['String']['input']>;
  githubRefreshTime?: InputMaybe<Scalars['DateTime']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleRefreshTime?: InputMaybe<Scalars['DateTime']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  microsoftId?: InputMaybe<Scalars['String']['input']>;
  microsoftRefreshTime?: InputMaybe<Scalars['DateTime']['input']>;
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  signupOrigin?: InputMaybe<SignupOrigin>;
  siteAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  siteUrl?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkflowInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  githubInstallationId?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  repository?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  Notebook: Array<Maybe<Notebook>>;
  SlackInstallations: Array<Maybe<SlackInstallation>>;
  auth0Id?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  cells: Array<Maybe<Cell>>;
  company?: Maybe<Scalars['String']['output']>;
  createTime?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  firebaseRefreshTime?: Maybe<Scalars['DateTime']['output']>;
  githubId?: Maybe<Scalars['String']['output']>;
  githubInstallations: Array<Maybe<GithubInstallation>>;
  githubRefreshTime?: Maybe<Scalars['DateTime']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  googleRefreshTime?: Maybe<Scalars['DateTime']['output']>;
  groupUsers?: Maybe<Array<Maybe<GroupUser>>>;
  id: Scalars['String']['output'];
  linkedin?: Maybe<Scalars['String']['output']>;
  microsoftId?: Maybe<Scalars['String']['output']>;
  microsoftRefreshTime?: Maybe<Scalars['DateTime']['output']>;
  photoUrl?: Maybe<Scalars['String']['output']>;
  signupOrigin?: Maybe<SignupOrigin>;
  siteAdmin?: Maybe<Scalars['Boolean']['output']>;
  siteUrl?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updateTime?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Workflow = {
  __typename?: 'Workflow';
  fileName: Scalars['String']['output'];
  githubInstallation?: Maybe<GithubInstallation>;
  githubInstallationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  path: Scalars['String']['output'];
  repository: Scalars['String']['output'];
};

export type _CreateNotebookInput = {
  lifecycleIdentityId: Scalars['String']['input'];
};

export type GetLogListQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetLogListQuery = { __typename?: 'Query', logs: { __typename?: 'PaginatedLogs', data: Array<{ __typename?: 'Log', createTime: any, data: any, id: string, logType: { __typename?: 'LogType', description: string, name: string }, user: { __typename?: 'User', id: string, email: string, photoUrl?: string | null, displayName?: string | null } }>, meta: { __typename?: 'PaginationMeta', totalPages: number } } };

export type GetChatResponseQueryVariables = Exact<{
  input: ChatInput;
}>;


export type GetChatResponseQuery = { __typename?: 'Query', assistant?: { __typename?: 'Assistant', chat?: { __typename?: 'Chat', question: string, response: string, commands?: string | null, session?: { __typename?: 'ChatSession', id: string, expirySecs?: number | null, collectionName: string } | null, hits: Array<{ __typename?: 'Hit', document: string, distance?: number | null, metadata: Array<{ __typename?: 'DocMetadata', key: string, value: string }> }> } | null } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, photoUrl?: string | null } | null };

export type SubscriptionChatSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscriptionChatSubscription = { __typename?: 'Subscription', chat?: { __typename?: 'ChatMessage', message: string, token: string, done: boolean } | null };


export const GetLogListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLogList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTime"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<GetLogListQuery, GetLogListQueryVariables>;
export const GetChatResponseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChatResponse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assistant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"session"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expirySecs"}},{"kind":"Field","name":{"kind":"Name","value":"collectionName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"response"}},{"kind":"Field","name":{"kind":"Name","value":"commands"}},{"kind":"Field","name":{"kind":"Name","value":"hits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChatResponseQuery, GetChatResponseQueryVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const SubscriptionChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscriptionChat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"done"}}]}}]}}]} as unknown as DocumentNode<SubscriptionChatSubscription, SubscriptionChatSubscriptionVariables>;