import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function PokemonCard() {
    const [pokemonCard, setPokemonCard] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [comment, setComment] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getPokemonCard = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pokemoncards/${id}`)
                console.log(response.data)
                setPokemonCard(response.data.pokemonCard)
                setComment(response.data.comments)
                console.log(comment)
            }catch(err){
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getPokemonCard()
    }, [])

    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/pokemoncards/${id}`)
            navigate('/pokemoncards')
        }catch(err) {
            console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
        }
    }
    const comments = comment.map(comment => {
        return(
        <p>{comment.content}</p>
        )
    })
    return (
      <div>
        <h1>Pokemon Card Details</h1>
            <p>{errorMessage}</p>
            <div>
                <img src={pokemonCard.img_Url} style={{height: '400px'}}></img>
                <h2>{pokemonCard.name}</h2>
                <p><strong>Rarity:</strong> {pokemonCard.rarity}</p>
                <p><strong>Card Description:</strong> {pokemonCard.description}</p>
            </div>
            <div>
                <Link to={`/pokemoncards/${id}/edit`}><button>Edit</button></Link> {' | '}
                <button onClick={handleDelete}>Delete</button>
            </div>
            <h3>Comments</h3>
            {comments}
      </div>
    );
  }