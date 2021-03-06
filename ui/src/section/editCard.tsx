import CardListWidget from '../game/component/cardListWidget'

import { useAppSelector, useAppDispatch } from '../hooks'

import DownloadCardList from '../game/component/downloadCards'
import DivNice from '../component/divNice'

import {
  setCard,
  setCardLevel,
} from '../reducer/cardListSlice'


const DisplayCard = () => {

  const cardList = useAppSelector((state) => state.cardListSlice.cardList)
  const user = useAppSelector((state) => state.userSlice.user)
  const dispatch = useAppDispatch()

  const _setCard = (card : {
    cardId: number,
    mana: number,
    family: number,
    starter: number,
    name: string
  }) => {
    dispatch(setCard(card))
  }

  const _setCardLevel = (level : {
    cardId: number,
    level: number,
    attack: number,
    life: number,
    description: string
  }) => {
    dispatch(setCardLevel(level))
  }

  if (cardList) {
    return (
      <>
      <DivNice>
      <DownloadCardList
        cardList={cardList}
        />
      </DivNice>
      <CardListWidget
        cardList={cardList}
        userId={user?.id}
        setCard={_setCard}
        setCardLevel={_setCardLevel}
      />
      </>
    )
  }

  return (<></>)
}

export default DisplayCard
