import { useState } from "react";
import "./ChartBar.scss";

const ChartBar = ({ date, country, appName, adNet, dailyUsers, activeProp }) => {
    const [barHeight, setBarHeight] = useState(0);

    return (
        <>
            <div className="chartbar" style={{ height: { barHeight } }}>
                <h3>{appName}</h3>
            </div>
        </>
    );
};

export default ChartBar;
