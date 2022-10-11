import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, { subscribe } from './redux/state';


import { addPost, updateNewPostText } from './redux/state';






const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () => {
   root.render(
      <App data={state} addPost={addPost} updateNewPostText={updateNewPostText} />
   );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)


