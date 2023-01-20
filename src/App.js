import logo from "./logo.svg";
import "./App.css";
import gamesData from "./data/data sample.json";
import DataGraphContainer from "./containers/DataGraphContainer/DataGraphContainer";

function App() {
    return (
        <div className="App">
            <DataGraphContainer data={gamesData} />
        </div>
    );
}

export default App;
