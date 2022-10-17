export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const ADD_POST = 'ADD-POST'

const profileReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         const newPost = {
            id: state.posts.length,
            message: state.newPostText,
            avatar: '',
            name: 'unknown'
         }
         state.posts.push(newPost)
         state.newPostText = ''
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.text
         return state;
      default:
         return state
   }
}

export const addPostCreator = () => (
   { type: ADD_POST }
)
export const updateNewPostTextCreator = (text) => (
   { type: UPDATE_NEW_POST_TEXT, text }
)

export default profileReducer