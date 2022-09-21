import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      nickname
      firstName
      lastName
      uid
      email
      firstName
      lastName
      settings {
        notifications
      }
      mfaStatus
      subscriptionProvider
      metadata {
        isPremium
        managedBots
      }
    }
  }
`;

export default GET_CURRENT_USER;
