//import { useState, useEffect } from 'react';
import Card from './Card';
import data from '../logements.json'
//
console.log(data);

const CardContainer = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('../logements.js')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (

        <div className="cards-container" id="card-containers">
            {data.map(item => <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />)}
        </div>
    )
}

export default CardContainer;
