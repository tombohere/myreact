import React, { useContext, useState, useEffect } from 'react';

import { AppContext } from './../../context/AppContext';

const Emoji = () => {
  const [counter, setCounter] = useContext(AppContext);
  const [searchterm, setSearchterm] = useState('');
  const [emojiList, setEmojiList] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  function loadList() {
    var emojis = window.localStorage.getItem(`emojis-${searchterm}`);
    if (!emojis) {
      fetch(`https://emoji-api.com/emojis?search=${searchterm}&access_key=1f0b6163154abe94b5db2052d8ccbd03fa7db1fd`)
      .then((response) => response.json())
      .then((myJson) => {
        setEmojiList(myJson || []);
        window.localStorage.setItem(`emojis-${searchterm}`, JSON.stringify(myJson || []));
      });
    } else {
      setEmojiList(JSON.parse(emojis));
    }
  }

  function handleChange(event) {
    const { value } = event.target;
    setSearchterm(value);
  }

  function searchEmoji(e) {
    e.preventDefault();
    loadList();
  }

  return (
    <>
      Emoji
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <form className="emoji-form">
        <input
          type="text"
          value={searchterm}
          onChange={handleChange}
        />
        <button onClick={(e) => searchEmoji(e)}>Search</button>
        <div className="emoji-container">
        {emojiList.map((emoji, i) =>
          <div className="emoji-row" key={i}>
            <div className="emoji-icon">{emoji.character}</div>
            <div className="emoji-description">{emoji.unicodeName}</div>
          </div>
        )}
        </div>
      </form>
    </>
  );
};

export default Emoji;
