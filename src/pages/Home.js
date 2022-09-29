import Data from '../api/Data'

const Home = () => {
    return ( 
        <div className="homeContainer">
             console.log(Data);
    return Data.map((Data, index) => (
        <gamesCard
        key={"gamesCard" + index}
        title={Data.title}
        short_description={Data.short_description}
        platform={Data.platform}
        CarYear={Data.CarYear}
        />

    ));
        </div>
     );
}
 
export default Home;