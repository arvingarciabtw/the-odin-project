import { Link } from 'react-router';

function SignUpForm() {
  return (
    <form action="/sign-up" method="POST">
      <h1>Sign Up</h1>
      <p className="description">
        Enter your details below to sign up. Take note that you cannot have the
        same username as another user.
      </p>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required />

      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
      />

      <p className="switch">
        Already have an account? <Link to="/log-in">Log in</Link>
      </p>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
