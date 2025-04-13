function actorCard({ actor }) {

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

            </div>

        </div>
    )

}

export default actorCard