import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Hello World</h1>
      <ul><li>1</li><li>2</li><li>3</li></ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <buttton className="App-button" type="button">BUTTON</buttton>
        <a
          className="App-link"
          href="https://serhii-bondariev.github.io/movieInfo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
