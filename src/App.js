import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppRouter from './Routes/AppRouter';


function App({ data, addPost }) {



  return (
    <BrowserRouter>
      <div className="app normal">
        <Navbar />
        <section className='content-wrapper'>
          <Sidebar />
          <AppRouter data={data} addPost={addPost} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
