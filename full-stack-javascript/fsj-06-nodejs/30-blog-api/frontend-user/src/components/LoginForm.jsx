import { Link } from 'react-router';

function LoginForm() {
  return (
    <form action="/log-in" method="POST">
      <h1>Log In</h1>
      <p className="description">Enter your correct details below to log in.</p>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />

      <p className="switch">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </p>

      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
