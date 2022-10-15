import { updateNewMessageText, sendMessage } from '../../../redux/slices/dialogsSlice'
import { connect } from 'react-redux'
import SendMessageBlock from './SendMessageBlock'



let mapStateToProps = (state) => {
   return {
      newMessageText: state.dialogs.newMessageText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessage())
      },
      onTextChange: (text) => {
         dispatch(updateNewMessageText(text))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageBlock)