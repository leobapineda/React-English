import "./App.css";
import Card from "./componenets/Card";
import reactLogo from "./img/logo192.png";
import reactLogoBig from "./img/logo512.png";

function App() {
  return (
    <div className="App">
      <Card logo={reactLogo} />
      <img
        className="react-logo"
        src={reactLogoBig}
        alt="freecodecamp bigger logo"
      />
    </div>
  );
}

export default App;
