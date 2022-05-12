import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Data from "./Data/Data";

function App() {
  let CardInfo = Data.map((element) => {
    return <Card key={element.id} CardElement={element} />;
  });

  return (
    <div className="App">
      <Header />
      {CardInfo}
      <Footer />
    </div>
  );
}

export default App;
