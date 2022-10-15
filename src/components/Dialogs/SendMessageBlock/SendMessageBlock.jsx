import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './SendMessageBlock.module.css'
import { updateNewMessageText, sendMessage } from '../../../redux/slices/dialogsSlice'

const SendMessageBlock = () => {
   const { newMessageText } = useSelector(state => state.dialogs)
   const dispatch = useDispatch()
   const newMessageElement = React.useRef()

   const onClickSend = () => {
      dispatch(sendMessage())
   }

   const onTextChange = () => {
      const text = newMessageElement.current.value
      dispatch(updateNewMessageText(text))
   }
   return (
      <section className={s.wrapper}>
         <input onChange={onTextChange} value={newMessageText} ref={newMessageElement} className={s.text_input} type='text' />
         <button onClick={onClickSend}>send</button>
      </section>
   )
}

export default SendMessageBlock