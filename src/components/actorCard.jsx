function ActorCard({ actor }) {

    return (
        <div className="card">
            <div className="image-container">
                <img src={actor.image} alt={actor.name} />
            </div>

            <div className="textbox">
                <p>nome: {actor.name}</p>
                <p> anno di nascita: {actor.birth_year}</p>
                <p>morte: {actor.death_year}</p>
                <p>nazionalità: {actor.nationality}</p>

                <p> conosciuto per: </p>
                <ul>
                    {actor.know_for.map((movie, index) => (
                        <li key={index}> {movie} </li>
                    )

                    )}

                </ul>

            </div>

        </div>
    )

}

export default ActorCard