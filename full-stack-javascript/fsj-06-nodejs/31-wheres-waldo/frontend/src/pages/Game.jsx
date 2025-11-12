import { Link } from 'react-router-dom';
import Description from '../components/Description';

function Game() {
  return (
    <main>
      <Description
        title="Catch them!"
        description="Find the three Pokémon indicated. Go on and catch them!"
      />
      <Link to="/">
        <button>Give Up</button>
      </Link>
    </main>
  );
}

export default Game;
