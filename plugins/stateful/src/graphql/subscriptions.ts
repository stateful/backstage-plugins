import { gql } from "../__generated__";

export const SUBSCRIPTION_CHAT = gql(`
  subscription SubscriptionChat {
    chat {
      message
      token
      done
    }
  }
`)
