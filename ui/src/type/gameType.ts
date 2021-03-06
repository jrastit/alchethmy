export enum ActionType {
  Draw,
  Draw2,
  Attack,
  Attack2,
}

export type GameActionListType = (GameActionType | null)[]

export type GameActionPayloadType = {
  turn: number,
  id: number,
  gameAction: GameActionType,
}

export type GameActionType = {
  gameCardId: number
  actionTypeId: number
  dest?: number,
  result?: number,
  self?: boolean,
}

export type TurnDataType = {
  turn: number
  playActionList: GameActionListType
  playActionId: number
  cardList: (GameCardType | undefined)[][]
  userId: number[]
  pos: number
}

export type GameCardPlaceType = {
  x: number
  y: number
  heigth: number
  width: number
}

export type GameCardType = {
  id: number
  userId: number
  userCardId: number
  cardId: number
  life: number
  attack: number
  speed: number
  mana: number
  exp: number
  expWin: number
  play: number
}

export type GameType = {
  id: number
  userId1: number
  userId2: number
  cardList1: (GameCardType | undefined)[]
  cardList2: (GameCardType | undefined)[]
  latestTime: number
  version: number
  turn: number
  actionId: number
  winner: number
  ended: boolean
}

export type GameListItemType = {
  id: number
  userId1: number
  userId2: number
  userDeck1: number
  userDeck2: number
  winner: number
  ended: boolean
  playGame: string | undefined
}
