import { DocMetadata, Hit } from "../__generated__/graphql"

export function toMetahash(entry: Hit) {
  // TODO-MIGRATE: remove this ts ignore when we have migrated all features
  // @ts-ignore
  return entry?.metadata
    ?.filter((obj): obj is DocMetadata => obj !== null)
    .reduce<{ [key: string]: string }>((map, obj: DocMetadata) => {
      map[obj.key] = obj.value
      return map
    }, {})
}

export interface IndexedRepositories {
  [key: string]: string
}

export interface RepositoryPath {
  gitRemote: string
  htmlPath: string
  owner: string
}

export const indexedRepositories: IndexedRepositories = {
  'vscode-webview-ui-toolkit': 'sourishkrout',
  'vscode-extension-samples': 'microsoft',
  vscode: 'microsoft',
}


export const getRepository = (
  projectName: string,
  gitRemote?: string | undefined
): RepositoryPath => {
  const owner = indexedRepositories[projectName] || 'stateful'
  const projectPath = `${owner}/${projectName}`

  if (gitRemote) {
    return {
      gitRemote,
      htmlPath: `https://github.com/${projectPath}`,
      owner,
    } as RepositoryPath
  }

  return {
    gitRemote: `git@github.com:${projectPath}`,
    htmlPath: `https://github.com/${projectPath}`,
    owner,
  }
}

export function getUriHandlerLink(
  repositoryInfo: RepositoryPath,
  fileName: string,
  cellIndex: string,
  command = 'setup'
): string {
  return `vscode://stateful.runme?command=${command}&repository=${repositoryInfo.gitRemote}&fileToOpen=${fileName}&cell=${cellIndex}`
}

export function getNumberFromMetadata(entry: Hit, key: string): number {
  const m = entry?.metadata?.find((value) => value?.key === key)
  return parseInt(m?.value ?? '0', 10)
}