function Card(props){
    const { product } = props
    // "name": "Webber",
    // "surname": "Mark",
    // "ranking": 3,
    // "points": 258,
    // "lastRace": 1,
    // "wins": 1,
    // "poles": 3,
    // "bestPosition": 1,
    // "nationality": "Australia",
    // "team": "Red Bull",
    // "teamPoints": 650
    return(
        <div className="all">
            <div className="container">
                <div className="title">{product.name}</div>
                <div className="title">{product.name}</div>
                <div className="description">{product.price}</div>
            </div>
        </div>
    )
}

export { Card }