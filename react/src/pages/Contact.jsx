import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Form submitted!');
  };

  return (
    <div>
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} /><br />

        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} /> Female<br />

        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} /><br />

        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} /><br />

        <label>Department:</label>
        <input type="text" name="department" value={form.department} onChange={handleChange} /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
