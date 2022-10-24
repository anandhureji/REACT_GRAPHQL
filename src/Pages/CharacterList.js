import React from 'react'
import {useQuery,gql} from "@apollo/client"
import './Characterlist.css'

const GET_CHARACTERS = gql`
query {
  characters{
    results{
      id
      name
      image
      gender
    }
    
  }
  
}
`;

const CharacterList = () => {
    const {error,loading,data} = useQuery(GET_CHARACTERS);
    console.log({error,loading,data});

    if(loading)
    return <div className='success'>Spinner..</div>
    if(error)
    return <div className='error'>Someting went wrong...</div>
   
    else
    return <div className='CharacterList'>
    {data.characters.results.map(character=>{
        return <div key={character.id}>
        <img src={character.image} />
        <h2>{character.name}</h2>
        </div>
    })}
    </div>

}

export default CharacterList

//download extension Graph