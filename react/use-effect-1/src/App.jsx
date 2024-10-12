import { useState, useEffect } from 'react'
import PokeList from './components/PokeList.jsx';
import PokeDetail from './components/PokeDetail.jsx'

const endPoint = "https://pokeapi.co/api/v2/pokemon";

import './App.css'

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [pokeDetail, setPokeDetail] = useState(null);
  useEffect(() => {
    console.log("Fetching:", endPoint)
    fetch(endPoint)
      .then(res => res.json())
      .then(data => setPokemons(data.results))
  }, [])

  function handleClick(url) {
    console.log("Fetching:", url)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPokeDetail(data)
      })
  }


  return (
    <>
      {pokemons && <PokeList pokemons={pokemons} handleClick={handleClick} />}
      {!pokemons && <h1>Loading...</h1>}
      {pokeDetail && <PokeDetail data={pokeDetail} />}
      {!pokeDetail && <h1>Select ...</h1>}
    </>
  )
}

export default App
