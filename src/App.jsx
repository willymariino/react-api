import axios from "axios";
import { useState, useEffect } from "react";
import ActorCard from "./components/actorCard";

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
    <div className="container-card-item">
      <h1>Attori famosi</h1>

      {actors.map((actor) => (

        <ActorCard key={actor.id} actor={actor} />

      )



      )}

    </div>
  )
}