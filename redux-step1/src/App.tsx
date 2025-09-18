import React from 'react';
import logo from './logo.svg';
import './App.css';

// @ts-ignore
function App({value, onIncrement, onDecrement}) {

    type Prorps = {
        value: number;
        onIncrement: () => void;
        onDecrement: () => void;
    }

    return (
    <div className="App">
      Clicked: {value} times
        <button onClick={onIncrement}>
            +
        </button>
        <button onClick={onDecrement}>
            -
        </button>
    </div>
  );
}

export default App;
