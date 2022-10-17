export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.text
         return state;
      case SEND_MESSAGE:
         const newMessage = {
            id: state.messages.length,
            message: state.newMessageText,
            name: 'unknown'
         }
         state.messages.push(newMessage)
         state.newMessageText = ''
         return state;
      default:
         return state
   }
}

export const sendMessageCreator = () => (
   { type: SEND_MESSAGE }
)
export const updateNewMessageTextCreator = (text) => (
   { type: UPDATE_NEW_MESSAGE_TEXT, text }
)


export default dialogsReducer