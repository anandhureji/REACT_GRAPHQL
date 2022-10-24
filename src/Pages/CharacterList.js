import React from 'react'
import { useCharacterList } from '../hooks/useCharacterList';
import {Link} from "react-router-dom";

import './Characterlist.css'



const CharacterList = () => {



   const {error,loading,data}=useCharacterList();
    
    console.log({error,loading,data});

    if(loading)
    return <div className='success'>Spinner..</div>
    if(error)
    return <div className='error'>Someting went wrong...</div>
   
    else
    return <div className='CharacterList'>
    {data.characters.results.map(character=>{
        return <Link to={`/${character.id}`} key={character.id}>
        <img src={character.image} />
        <h2>{character.name}</h2>
        </Link>
    })}
    </div>

}

export default CharacterList

//download extension Graph