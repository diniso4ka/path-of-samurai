import {
    addNewPost,
    updateNewPostText,
} from '../../../../redux/slices/profileSlice'
import { connect } from 'react-redux'
import AddPostBlock from './AddPostBlock'
import { RootState } from '../../../../redux/store'

let mapStateToProps = (state: RootState) => {
    return {
        newPostText: state.dialogs.newMessageText,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        createPost: () => {
            dispatch(addNewPost())
        },
        onPostChange: text => {
            dispatch(updateNewPostText(text))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostBlock)
