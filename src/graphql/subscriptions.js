/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateChallenge = /* GraphQL */ `
  subscription OnCreateChallenge {
    onCreateChallenge {
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
export const onUpdateChallenge = /* GraphQL */ `
  subscription OnUpdateChallenge {
    onUpdateChallenge {
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
export const onDeleteChallenge = /* GraphQL */ `
  subscription OnDeleteChallenge {
    onDeleteChallenge {
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
