/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      firstName
      surName
      email
      rank
      beltColour
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        surName
        email
        rank
        beltColour
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChallenge = /* GraphQL */ `
  query GetChallenge($id: ID!) {
    getChallenge(id: $id) {
      id
      player1 {
        id
        firstName
        surName
        email
        rank
        beltColour
        createdAt
        updatedAt
      }
      player2 {
        id
        firstName
        surName
        email
        rank
        beltColour
        createdAt
        updatedAt
      }
      winner {
        id
        firstName
        surName
        email
        rank
        beltColour
        createdAt
        updatedAt
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        player1 {
          id
          firstName
          surName
          email
          rank
          beltColour
          createdAt
          updatedAt
        }
        player2 {
          id
          firstName
          surName
          email
          rank
          beltColour
          createdAt
          updatedAt
        }
        winner {
          id
          firstName
          surName
          email
          rank
          beltColour
          createdAt
          updatedAt
        }
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
