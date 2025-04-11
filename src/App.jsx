import { useState, useEffect } from 'react'
import axios from 'axios'



function App() {
  const [actors, setActors] = useState([])

  // fetching dei dati

  function actors() {
    axios.get("https://freetestapi.com/api/v1/actors")
      .then((res) => setActors(res.data))


  }

  return (
    <>

    </>
  )
}

export default App
