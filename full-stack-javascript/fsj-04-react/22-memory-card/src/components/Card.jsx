function Card({ card, handleClick }) {
  return (
    <img 
      src={card.url}
      alt={card.name}
      className="card"
      onClick={handleClick}
    />
  );
}

export default Card;
