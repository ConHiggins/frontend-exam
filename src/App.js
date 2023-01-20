import logo from "./logo.svg";
import "./App.css";
import gamesData from "./data/data sample.json";
import DataGraphContainer from "./containers/DataGraphContainer/DataGraphContainer";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <DataGraphContainer data={gamesData} />
        </div>
    );
}

export default App;
