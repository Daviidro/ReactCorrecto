import { useEffect, useState } from "react";

import { getCharacters } from "../../services/characters";


export default function Home() {

  const [characters, setCharacters] = useState([])

useEffect(()=>{
  const getCharactersQuery= async () => {
    const data = await getCharacters();
    console.log(data);
    setCharacters(data.results)
  };

  getCharactersQuery ()
  
}, [])

console.log(characters, "STATE characters");
  // Rquest de caricatura 
  return <h1>Bienvenido</h1>;
}