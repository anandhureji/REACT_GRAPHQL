import React from 'react'
import { useCharacter } from '../hooks/useCharacter'

function Character() {
  
   const {data,error,loading} = useCharacter(5);
   console.log(
    {data,error,loading}
   );
   if(error)
   return <div>Someting went wrong</div>
   if(loading)
   return <div>loading...</div>
   return<div className='character'>
   <img src={data.character.image} width={750} height={750} />
   <div className='character-content'>
   <h1>{data.character.name}</h1>
   <p>{data.character.gender}</p>
   <div className='character-episode'>
   {data.character.episode.map(episode=>{
    return(
        <div>
    {episode.name}- <b>{episode.episode}</b>
    </div>)
   })}
   </div>
   </div>


   </div>


}

export default Character