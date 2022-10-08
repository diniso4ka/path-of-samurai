import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="app normal">
      <Navbar />
      <section className='content-wrapper'>
        <Sidebar />
        <Main />
      </section>
    </div>
  );
}

export default App;
