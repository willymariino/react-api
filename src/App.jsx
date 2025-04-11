import { useState, useEffect } from 'react'
import axios from 'axios'



function App() {
  const [actors, setActors] = useState([])

  // fetching dei dati

  function actors() {
    axios.get("https://freetestapi.com/api/v1/actors")
      .then((res) => setActors(res.data))


  }

  useEffect(fetchActor, [])

  return (
    <>

      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>{actor.name}, {actor.birth_year}, {actor.death_year}, {actor.nationality},  </li>
        )



        )}
      </ul>

    </>
  )
}

export default App
