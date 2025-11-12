import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link to="/game">Play!</Link>
    </main>
  );
}

export default Home;
