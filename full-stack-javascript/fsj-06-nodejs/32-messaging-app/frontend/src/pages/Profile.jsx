import styles from '../styles/Profile.module.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { api } from '../utils/api';

function Profile() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    username: user.username,
    password: '',
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(type, e) {
    e.preventDefault();

    if (type === 'firstName') {
      await api.post(`/api/users/${user.id}/first-name`, {
        id: user.id,
        newFirstName: formData.firstName,
      });
    }

    if (type === 'lastName') {
      await api.post(`/api/users/${user.id}/last-name`, {
        id: user.id,
        newLastName: formData.lastName,
      });
    }

    if (type === 'username') {
      console.log('The username should be updated');
    }

    if (type === 'password') {
      console.log('The password should be updated');
    }
  }

  return (
    <>
      <NavBar />
      <main className={styles.profile}>
        <form
          onSubmit={(e) => {
            handleSubmit('firstName', e);
          }}
        >
          <div className={styles.inputDetails}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
        <form
          onSubmit={(e) => {
            handleSubmit('lastName', e);
          }}
        >
          <div className={styles.inputDetails}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
        <form
          onSubmit={(e) => {
            handleSubmit('username', e);
          }}
        >
          <div className={styles.inputDetails}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
        <form
          onSubmit={(e) => {
            handleSubmit('password', e);
          }}
        >
          <div className={styles.inputDetails}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
export default Profile;
