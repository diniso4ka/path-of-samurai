import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="app normal">
      <Navbar />
      <section className='content-wrapper'>
        <Sidebar />
        <Profile />
      </section>
    </div>
  );
}

export default App;
