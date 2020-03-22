import React, { useContext, useState, useEffect } from 'react';
import './../../sass/Form.scss';

import { AppContext } from './../../context/AppContext';

const Emoji = () => {
  const [counter, setCounter] = useContext(AppContext);
  const [searchterm, setSearchterm] = useState('box');
  const [emojiList, setEmojiList] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  function loadList() {
    fetch(`https://emoji-api.com/emojis?search=${searchterm}&access_key=1f0b6163154abe94b5db2052d8ccbd03fa7db1fd`)
    .then((response) => response.json())
    .then((myJson) => {
      setEmojiList(myJson || []);
    });
  }

  function handleChange(event) {
    const { value } = event.target;
    setSearchterm(value);
  }

  function searchEmoji(e) {
    e.preventDefault();
    console.log(123);
    loadList();
  }

  return (
    <>
      Emoji
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <form className="my-form">
        <input
          type="text"
          value={searchterm}
          onChange={handleChange}
        />
        <button onClick={(e) => searchEmoji(e)}>Search</button>
        {emojiList.map((emoji, i) =>
          <div key={i}>{emoji.character} {emoji.unicodeName}</div>
        )}
      </form>
    </>
  );
};

export default Emoji;
