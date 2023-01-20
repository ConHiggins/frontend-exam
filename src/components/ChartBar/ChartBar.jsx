import { useState } from "react";
import "./ChartBar.scss";

const ChartBar = ({ date, country, appName, adNet, dailyUsers }) => {
    const [barHeight, setBarHeight] = useState(dailyUsers);

    return (
        <>
            <div className="chartbar" style={{ height: `${Math.min(barHeight, 200)}px` }}>
                <h3 className="chartbar-title">{appName}</h3>
            </div>
        </>
    );
};

export default ChartBar;
