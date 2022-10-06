import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewPokemonCard(){
    // state for form
    const [ form, setForm ] = useState({
        name: '',
        img_Url: '',
        rarity: '',
        description: '',
    })
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    // submit event handler
    const handleSubmit = async e => {
        try{
            e.preventDefault()
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/pokemoncards`, form)
            // navigate back to pokemon cards
            navigate('/pokemoncards')
        }catch(err) {
            console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
        }
    }
    return(
        <div>
            <h1>Add a new Pokemon Card!</h1>
            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit} style={{textAlign: 'match-parent'}}>
                <div className='formMargin'>
                    <label htmlFor='name'>Card Name:</label>
                    <input 
                    type='text' 
                    id='name' 
                    value={form.name}
                    placeholder="Ex: Pikachu V, Radiant Steelix"
                    onChange={e => setForm({...form, name: e.target.value})}></input>
                </div>
                <div className='formMargin'>
                    <label htmlFor='img_Url'>Image URL:</label>
                    <input 
                    type='text' 
                    id='img_Url' 
                    value={form.img_Url}
                    placeholder='Add a valid image URL' 
                    onChange={e => setForm({...form, img_Url: e.target.value})}></input>
                </div>
                <div className='formMargin'>
                    <label htmlFor='rarity'>Card Rarity:</label>
                    <input 
                    type='text' 
                    id='rarity' 
                    value={form.rarity}
                    placeholder='Ex: Common, Uncommon, Rare, Holo Rare, Ultra Rare, Trainer Gallery Holo Rare...' 
                    onChange={e => setForm({...form, rarity: e.target.value})}></input>
                </div>
                <div className='formMargin'>
                    <label htmlFor='description'>Card Description:</label>
                    <input 
                    type='text' 
                    id='description' 
                    value={form.description}
                    placeholder="Add Card Details" 
                    onChange={e => setForm({...form, description: e.target.value})}></input>
                </div>
                <button type='submit'>Add to Collection</button>
            </form>
        </div>
    )
}