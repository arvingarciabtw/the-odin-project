import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../utils/api';

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/api/auth/login', formData);

      const data = await response.json();

      if (!response.ok) throw new Error(data.msg || 'Login failed.');

      if (!data.user.isAdmin) {
        setError('Only admins are allowed to log in.');
        return;
      }

      localStorage.setItem('token', data.token);

      login(data.token);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <p className="description">
        Enter your correct details below to log in. Take note that only an admin
        can log in.
      </p>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      {error && <p className="error-message">{error}</p>}

      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
