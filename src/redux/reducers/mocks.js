export const user = {
  id: 'a86cf54e-9c71-44bc-8758-7f4d6dd3af9a',
  name: 'Janosh',
  avatar: '0',
  games: {
    played: '',
    won: '',
  },
};

export const game = {
  id: 'xwfKQKPk0kK_tpxPAABy',
  initiator: {
    name: 'Janosh',
    id: 'a86cf54e-9c71-44bc-8758-7f4d6dd3af9a',
    avatar: 0
  },
  playerList: [
    {
      user: {
        name: 'Janosh',
        id: 'a86cf54e-9c71-44bc-8758-7f4d6dd3af9a',
        avatar: 0
      },
      faction: 'fascist',
      hitler: true,
      president: true,
      chancellor: false,
      executed: false,
      chancellorVote: null
    },
    {
      user: {
        name: 'Oscar',
        id: '3caea987-09b9-40dc-a592-e6acff3cc9f4',
        avatar: 1
      },
      faction: 'fascist',
      hitler: true,
      president: false,
      chancellor: false,
      executed: false,
      chancellorVote: null
    },
    {
      user: {
        name: 'Lucie',
        id: '67a9c920-f52c-4e8b-9327-648eb23e3f38',
        avatar: 2
      },
      faction: 'liberal',
      hitler: false,
      president: true,
      chancellor: false,
      executed: false,
      chancellorVote: null
    },
    {
      user: {
        name: 'Diego',
        id: '0d1e9481-61dd-451e-a88a-ddd2f7a52d65',
        avatar: 3
      },
      faction: 'fascist',
      hitler: true,
      president: true,
      chancellor: false,
      executed: false,
      chancellorVote: null
    },
    {
      user: {
        name: 'Krysh',
        id: '0b7bbd99-c452-40a2-842e-5c88667c5d45',
        avatar: 4
      },
      faction: 'fascist',
      hitler: false,
      president: false,
      chancellor: false,
      executed: false,
      chancellorVote: null
    }
  ],
  message: 'showRoles',
  numberOfLiberals: 3,
  numberOfFascists: 2,
  numberOfLiberalPolicies: 0,
  numberOfFascistPolicies: 0,
  acknowledgeCounts: {
    playerRole: 0,
    fascists: 0,
    president: 0,
    chancellor: 0,
    chosenPolicy: 0,
    vetoPower: 0
  },
  turnCount: 0,
  currentPresident: 'a86cf54e-9c71-44bc-8758-7f4d6dd3af9a',
  suggestedChancellor: null,
  chancellorVoteCount: 0,
  eligiblePolicies: [
    'fascist',
    'liberal',
    'fascist'
  ],
  electionFailCount: 0,
  vetoPowerUnlocked: false,
  gameOver: false,
  askPresidentToExecutePlayer: true,
  executedPlayers: []
};