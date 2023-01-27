

const Card = ({id, title, cover}) => {
    return (
        <div className="card" id={id} style={{backgroundImage: `url(${cover})`}} onClick={() => window.location.href = `/logement/${id}`}>
            <div className="card-text-container">
                <div className="card-text">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
