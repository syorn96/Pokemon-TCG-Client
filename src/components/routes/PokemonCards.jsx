import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function PokemonCards() {
    const [pokemonCards, setPokemonCards] = useState([])

    const [errorMessage, setErrorMessage] = useState('')
    // console.log(`server url`, process.env.REACT_APP_SERVER_URL)
    useEffect(()=> {
        const getPokemonCards = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pokemoncards`)
                // console.log(response.data)
                setPokemonCards(response.data)
            }catch(err) {
                console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getPokemonCards()
    },[]) //run once

    const pokemonCardLinks = pokemonCards.map(card => {
        return (
            <div key={card.id}  style={{margin: '15px'}}>
                
                <Link to={`/pokemoncards/${card.id}`}><img src={card.img_Url} height='200px'></img></Link>
            </div>
        )
    })
    return (
      <div>
        <h1>Pokemon Virtual Trading Collection</h1>
        <div  style={{display: 'flex'}}>
        {pokemonCardLinks}
        </div>
        <p>{errorMessage}</p>
      </div>
    );
  }