import logo from "./logo.svg";
import "./App.css";
import gamesData from "./data/data sample.json";
import DataGraphContainer from "./containers/DataGraphContainer/DataGraphContainer";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
    const [activeProp, setActiveProp] = useState(null);

    return (
        <div className="App">
            <NavBar />
            <DataGraphContainer data={gamesData} activeProp={activeProp} />
        </div>
    );
}

export default App;
