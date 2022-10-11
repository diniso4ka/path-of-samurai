import { Routes, Route, Navigate } from 'react-router-dom'

import { publicRoutes } from './routes'
import * as routes from '../utils/consts'


const AppRouter = ({ data, addPost, updateNewPostText }) => {
   return (
      <Routes>
         {publicRoutes.map(({ path, Component }) =>
            <Route data={data} key={path} path={path} element={<Component data={data} addPost={addPost} updateNewPostText={updateNewPostText} />} />
         )}
         <Route path='*' element={<Navigate to={routes.ROUTE_PROFILE} />} />
      </Routes>
   )
}

export default AppRouter