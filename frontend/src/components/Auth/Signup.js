import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authActions";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={onChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={onChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={onChange} required />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
