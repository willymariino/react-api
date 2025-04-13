function actorCard({ name, image }) {

    return (
        <div className="container-card-items" >
            <h1>Attori famosi</h1>

            {actors.map((actor) => (
                <actorCard key={actor.id} />
            )



            )}



        </div>
    )

}

export default actorCard