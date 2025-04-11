import { useState, useEffect } from 'react'
import axios from 'axios'



function App() {
  const [actors, setActors] = useState([])

  // fetching dei dati

  function fetchActors() {
    axios.get("https://www.freetestapi.com/api/v1/actors")
      .then((res) => setActors(res.data))


  }

  useEffect(fetchActors, [])

  return (
    <>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <img src={actor.image} alt={actor.name} />
            <h2>{actor.name}</h2>
            <p><strong>Nato:</strong> {actor.birth_year}</p>
            <p><strong>Morto:</strong> {actor.death_year}</p>
            <p><strong>Nazionalità:</strong> {actor.nationality}</p>
            <p><strong>Biografia:</strong> {actor.biography}</p>
            <p><strong>Famoso per:</strong></p>

          </li>
        ))}
      </ul>
    </>
  );

}



export default App
