import Card from './Card';
//import data from '../logements.json'

//console.log(data);

function CardContainer({data}) {
   


    return (

        <div className="cards-container" id="card-containers">
            {/* {data.map(item => <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />)} */}
            {data.map(item => <Card key={item.id} data={item} />)}
        </div>
    )
}

export default CardContainer;
