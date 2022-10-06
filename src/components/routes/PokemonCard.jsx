import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function PokemonCard() {
    const [pokemonCards, setPokemonCards] = useState([])

    const [errorMessage, setErrorMessage] = useState('')
    console.log(`serverurl`, process.env.REACT_APP_SERVER_URL)
    return (
      <div>
        PokemonCard
      </div>
    );
  }