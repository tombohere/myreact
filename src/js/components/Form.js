import React, { useState } from 'react';
import './../../sass/Form.scss';

const Form = () => {
  const [value, setValue] = useState('');

  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
  }

  return (
    <form className="my-form">
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      -{value}
    </form>
  );
};

export default Form;
