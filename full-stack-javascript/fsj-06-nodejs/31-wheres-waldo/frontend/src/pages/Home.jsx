import { Link } from 'react-router-dom';
import Description from '../components/Description';

function Home() {
  return (
    <main>
      <Description
        title="Where's that Pokémon?"
        description="This is a simple game where you find the three indicated Pokémon in an image full of Pokémon. You can choose to submit your final time to the leaderboard. Click the button below to play."
      />
      <Link to="/game">
        <button>Play</button>
      </Link>
    </main>
  );
}

export default Home;
