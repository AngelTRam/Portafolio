import './App.css';
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
            <a href="#" className='Nav-link'>Home</a>
            <a href="#" className='Nav-link'>Projects</a>
            <a href="#" className='Nav-link'>Profile</a>
          </div>
        </div>
      </header>
      <body className='App-body'>
        <h2 className='welcome-title'>Welcome to my site.</h2>
        <p>Hello, my name is Angel Tapia Ramirez. I am a recently graduated
          engineer in software development and management with a great 
          interest in technological innovations and the software development
           industry.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
