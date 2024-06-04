import './App.css';
import Abackground from './components/animatedbackground/animatedbackground';
import DarkMode from './components/darkmode/darkmode';
import SocialIcons from './components/social/social';
import userlogo from './usuario.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav-bar">
          <div className='nav-left-elements'>
            <img src={userlogo} className='User_logo'></img>
            <h1 className='title'>Angel Tapia Ramirez</h1>

          </div>
          <div className='nav-right-elements'>
            <a href="/" className='Nav-link'>Home</a>
            <a href="#" className='Nav-link'>Projects</a>
            <a href="#" className='Nav-link'>About me</a>
            <DarkMode />
          </div>
        </div>
      </header>
      <body className='App-body'>
        <div>
          <h2 className='welcome-title'>Welcome to my site.</h2>
          <p className='description'>Hello, my name is Angel Tapia Ramirez. I am a recently graduated
            engineer in software development and management with a great
            interest in technological innovations and the software development
            industry.</p>
          <div className='social-container'>
            <SocialIcons />
          </div>
        </div>
        <div>
          AAAAAAAAAAAAAAAAAAAAA
        </div>
      </body>
    </div>
  );
}

export default App;
