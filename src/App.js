import './App.css';
import Button from './Button.js'
import './grid.css'
import './button.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="main">
          <ul class="new">
          <li class="item">
              <div class="data">
                <div className="button2">
                  <Button />
                  <Button />
                  <Button />
                  <Button />
                </div>
              </div>
          </li>
          </ul>
        </div>
        <div class="main">
          <ul class="new">
          <li class="item">
              <div class="data">
                <div className="button2">
                  <Button />
                  <Button />
                  <Button />
                  <Button />
                </div>
              </div>
          </li>
          </ul>
        </div>
        <div>
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
        </div>
        </header>
    </div>
  );
}

export default App;
