import {
    updateNewMessageText,
    sendMessage,
} from '../../../redux/slices/dialogsSlice'
import { connect } from 'react-redux'
import SendMessageBlock from './SendMessageBlock'

let mapStateToProps = state => {
    return {
        newMessageText: state.dialogs.newMessageText,
        username: state.user.user.login,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        sendMessage: name => {
            dispatch(sendMessage(name))
        },
        onTextChange: text => {
            dispatch(updateNewMessageText(text))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageBlock)
