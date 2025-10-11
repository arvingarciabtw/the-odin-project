import "../styles/Cards.css"
import { useEffect, useState } from "react"
import Card from "./Card"

function Cards() {
  const [cards, setCards] = useState([])

  const cardItems = cards.map(card => {
    return (
      <Card key={card.id} card={card} cards={cards}/>
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

  return (
    <>
      <section className="container-cards"> 
        {cardItems}
      </section>
    </>
  );
}

export default Cards;
