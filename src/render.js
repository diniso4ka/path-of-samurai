import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { addPost, updateNewPostText } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenterEntireTree = (state) => {
   root.render(
      <App data={state} addPost={addPost} updateNewPostText={updateNewPostText} />
   );

}

