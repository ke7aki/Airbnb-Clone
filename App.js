import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import Data from "./components/Data";
import "../src/style/App.css"

function App() {
  const cards = Data.map((element) => {
    return (
      <Card 
        img = {element.img}
        rating = {element.rating}
        rank = {element.rank}
        location = {element.location}
        desc = {element.desc}
        price = {element.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="container">
        {cards}
      </div> 
    </div>
      
  );
}

export default App;
