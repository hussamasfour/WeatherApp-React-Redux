import SearchBar from "./components/SearchBar";
import Weather from "./components/weather/ThreeDays";
import Current from "./components/weather/Current";
import { Route } from "react-router-dom";
import Hourly from "./components/weather/Hourly";
const App = () => {
  return (
    <div className="ui conatiner">
      <SearchBar />

      <Route path="/weather" exact component={Weather} />
      <Route path="/current" exact component={Current} />
      <Route path="/hourly" exact component={Hourly} />
    </div>
  );
};

export default App;
