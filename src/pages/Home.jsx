
import CardContainer from "../components/CardContainer"; 


function Home ({data}) {

    return (
        <>
         
          <div className="caroussel home"></div>
          <CardContainer data={data} />

        </>
    )
}

export default Home;