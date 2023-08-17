import './index.scss';
import React from 'react';

function App() {

const [counter, setCounter] = React.useState(0);

const counterPlus = () => {
  setCounter(counter + 1)
}

const counterMinus = () => {
  setCounter(counter - 1)
}

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button onClick={counterMinus} className="minus">- Минус</button>
        <button onClick={counterPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
