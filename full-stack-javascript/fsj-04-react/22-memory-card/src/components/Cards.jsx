import { useEffect, useState } from "react"

function Cards() {
  const [cards, setCards] = useState([])

  const cardItems = cards.map(card => {
    return (
      <img 
        key={card.id}
        src={card.url}
        alt={card.name}
      />
    ) 
  })

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await fetch("https://api.hearthstonejson.com/v1/229543/enUS/cards.json") 
        const data = await response.json()

        let startingIndex = 12
        let endingIndex = 29
        let filteredCards = []

        for (let i = startingIndex; i < endingIndex; i++) {
          const hasArtistProperty = Object.hasOwn(data[i], 'artist')

          if (hasArtistProperty) {
            filteredCards.push(data[i])
          }
        }

        // get rid of other objects that have the same artist
        filteredCards = filteredCards.reduce((acc, obj) => {
          if (!acc.some(item => item['artist'] === obj['artist'])) {
            acc.push(obj);
          }
          return acc;
        }, []);

        filteredCards = filteredCards.map(card => {
          return {
            id: card.id,
            name: card.name,
            url: `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`
          }
        })

        setCards(filteredCards)
      } catch (err) {
        console.log(err)
      }
    }
    getCards()
  }, [])

  console.log(cards)

  return (
    <>
      {cardItems}
    </>
  );
}

export default Cards;
