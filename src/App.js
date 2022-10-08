import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './pages/Dialogs/Dialogs';
import Profile from './pages/Profile/Profile';
import AppRouter from './Routes/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="app normal">
        <Navbar />
        <section className='content-wrapper'>
          <Sidebar />
          <AppRouter />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
