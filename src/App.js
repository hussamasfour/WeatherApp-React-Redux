import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Weather />
    </div>
  );
}

export default App;
