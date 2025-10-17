import styles from '../styles/Error.module.css';
import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.containerError}>
      <h1 className={styles.headingError}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className={styles.errorMessage}>
        <i>
          Status {error.status}: {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}

export default Error;
