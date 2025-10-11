function Card({ card, cards }) {
  return (
    <img 
      src={card.url}
      alt={card.name}
      className="card"
    />
  );
}

export default Card;
