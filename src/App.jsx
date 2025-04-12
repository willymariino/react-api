import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [actors, setActors] = useState([]) /* creazione dello stato: creaimo una lista in cui conserveremo la lista degli actors,
                                              utilizziamo lo stato per aggiornare dinamicamentela UI quando otteniamo i dati dal server. */

  function fetchActors() {
    axios.get("https://www.freetestapi.com/api/v1/actors") // chaiamata API in get
      .then((res) => setActors(res.data))
      .catch((error) => console.error("errore durante la chiamata API", error))

    /* res rappresenta la risposta dell'API, res.data: contiene i dati principali restituiti dall'API (JSON)
    setActors aggiorna lo stato con i dati ricevuti,
    il then consente la gestiione asincrona, eseguendo il codice solo dopo che l'operazione è stata completata */

  }

  useEffect(fetchActors, []) //array vuoto nelle dipendenze per fare in modo che la funzione che venga esguita solo al primo render dei componenti
  return (
    <ul>
      {actors.map((actor) =>
        <li key={actor.id}>

          <img src={actor.image} alt={actor.name} />
          <p>nome: {actor.name}</p>
          <p> anno di nascita: {actor.birth_year}</p>
          <p>morte: {actor.death_year}</p>
          <p>nazionalità: {actor.nationality}</p>

          <p>conosciuto per: {actor.known_for.map((known_for, index) => (
            <li key={index}>{known_for}</li>
          )
          )}  </p>
        </li>
      )}

    </ul >
  )
}


