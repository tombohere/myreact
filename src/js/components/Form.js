import React, { useState } from 'react';
import './../../sass/Form.scss';

const Form = () => {
  const [form, setForm] = useState({
    first: '',
    last: '',
    email: ''
  });

  function handleChange(event) {
    const { id, value } = event.target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form className="my-form">
        <div className="form-grid">
          <label htmlFor="first">First Name</label>
          <input
            id="first"
            name="first"
            type="text"
            value={form.first}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="last">Last Name</label>
          <input
            id="last"
            name="last"
            type="text"
            value={form.last}
            onChange={handleChange}
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button>Submit</button>
      </form>
      {JSON.stringify(form)}
    </>
  );
};

export default Form;
