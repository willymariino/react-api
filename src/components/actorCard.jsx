function actorCard({ name, image }) {

    return (
        <div className="container-card-items" >
            <h1>Attori famosi</h1>

            {actors.map((actor) => (
                <actorCard key={actor.id} />
            )

                // test, non aggiorna github

            )}



        </div>
    )

}

export default actorCard