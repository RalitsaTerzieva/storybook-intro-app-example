import './App.css';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <header>
        <br/>
        <h3>Cool counter App</h3>
      </header>
      <div>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
