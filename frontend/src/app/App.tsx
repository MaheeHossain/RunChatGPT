import { Heading } from 'src/components/Heading';
import './App.css';
import { Logo } from 'src/components/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo altText='alt'/>
        <Heading headingText='heading'/>
        <a
          className="App-link"
          href="https://reactjs.org"
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
