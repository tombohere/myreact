import React, { useState } from 'react';
import './../../sass/Form.scss';

const Form = () => {
  const [form, setForm] = useState({
    first: '',
    last: '',
    email: ''
  });

  const onChange = e => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  }

  const onSubmit = e => {
    console.log(JSON.stringify(form));
    e.preventDefault();
  }

  return (
    <>
      <form className="my-form" onSubmit={onSubmit} noValidate>
        <div className="form-grid">
          <label htmlFor="first">First Name</label>
          <input
            id="first"
            name="first"
            type="text"
            value={form.first}
            onChange={onChange}
            autoComplete="off"
            required
          />
          <label htmlFor="last">Last Name</label>
          <input
            id="last"
            name="last"
            type="text"
            value={form.last}
            onChange={onChange}
            autoComplete="off"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>
        <button>Submit</button>
      </form>
      {JSON.stringify(form)}
    </>
  );
};

export default Form;
