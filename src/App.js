import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PostComponent from './components/Post';
import Header from './components/Header';
import HomePage from './pages/home';

function App() {
  return (
    <div className="Home">
        <Navbar/>
        <Header/>
        <HomePage/>

    </div>
  );
}

export default App;
