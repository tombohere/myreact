import React, { useContext } from 'react';
import './../../sass/Form.scss';

import { AppContext } from './../../context/AppContext';

const Minesweeper = () => {
  const [counter, setCounter] = useContext(AppContext);
  return (
    <>
      MineSweeper
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
    </>
  );
};

export default Minesweeper;
