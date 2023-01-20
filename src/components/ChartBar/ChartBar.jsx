import { useState } from "react";
import "./ChartBar.scss";

const ChartBar = ({ date, country, appName, adNet, dailyUsers }) => {
    const [activeProp, setActiveProp] = useState(null);
    const [barHeight, setBarHeight] = useState(0);

    return (
        <>
            <div className="chartbar" style={{ height: { barHeight } }}></div>
            <h3>{activeProp}</h3>
        </>
    );
};

export default ChartBar;
