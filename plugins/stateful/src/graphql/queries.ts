import { gql } from "../__generated__";


export const GET_LOGS_LIST = gql(`
  query GetLogList($page: Int!, $take: Int, $filters: JSON) {
    logs(page: $page, take: $take, filters: $filters) {
      data {
        createTime
        data
        id
        logType {
          description
          name
        }
        user {
          id
          email
          photoUrl
          displayName
        }
      }
      meta {
        totalPages
      }
    }
  }
`)