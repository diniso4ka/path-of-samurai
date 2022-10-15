import { addNewPost, updateNewPostText } from '../../../../redux/slices/profileSlice'
import { connect } from 'react-redux'
import AddPostBlock from './AddPostBlock'



let mapStateToProps = (state) => {
   return {
      newPostText: state.dialogs.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      createPost: () => {
         dispatch(addNewPost())
      },
      onPostChange: (text) => {
         dispatch(updateNewPostText(text))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostBlock)