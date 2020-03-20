import React, { useContext } from 'react';
import './../../sass/Form.scss';

import { AppContext } from './../../context/AppContext';

const Home = () => {
  const [counter, setCounter] = useContext(AppContext);
  return (
    <>
      HOME
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
};

export default Home;
