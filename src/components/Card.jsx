import { NavLink } from "react-router-dom";


function Card({data}) {
    return (
        <NavLink className="card" id={data.id} style={{backgroundImage: `url(${data.cover})`}} to={`/logement/${data.id}`}>
            <div className="card-text-container">
                <div className="card-text">
                    <p>{data.title}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default Card;
