import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNewMessageText, sendMessage } from '../../../redux/slices/dialogsSlice'
import SendMessageBlock from './SendMessageBlock'

const SendMessageContainer = () => {
   const { newMessageText } = useSelector(state => state.dialogs)
   const dispatch = useDispatch()


   const onClickSend = () => {
      dispatch(sendMessage())
   }

   const onTextChange = (text) => {
      dispatch(updateNewMessageText(text))
   }
   return (
      <SendMessageBlock onClickSend={onClickSend} onTextChange={onTextChange} newMessageText={newMessageText} />
   )
}

export default SendMessageContainer