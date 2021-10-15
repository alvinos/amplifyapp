/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createChallenge = /* GraphQL */ `
  mutation CreateChallenge(
    $input: CreateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    createChallenge(input: $input, condition: $condition) {
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
export const updateChallenge = /* GraphQL */ `
  mutation UpdateChallenge(
    $input: UpdateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    updateChallenge(input: $input, condition: $condition) {
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
export const deleteChallenge = /* GraphQL */ `
  mutation DeleteChallenge(
    $input: DeleteChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    deleteChallenge(input: $input, condition: $condition) {
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
