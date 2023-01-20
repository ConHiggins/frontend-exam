import { useState } from "react";
import "./DataGraph.scss";
import ChartBar from "../ChartBar/ChartBar";
import { useEffect } from "react";

const DataGraph = ({ data }, filters) => {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(10);
    const [displayData, setDisplayData] = useState([]);

    console.log(data.data);

    const getDisplayData = (arr, startInd, endInd) => {
        return arr?.slice(startInd, endInd).map((item, index) => {
            return (
                <ChartBar
                    date={item.Date}
                    country={item.Country}
                    appName={item.App}
                    adNet={item["Ad Network"]}
                    dailyUsers={item["Daily Users"]}
                />
            );
        });
    };

    useEffect(() => {
        setDisplayData(getDisplayData(data.data, startIndex, endIndex));
    }, [data]);

    return <div className="datagraph">{displayData}</div>;
};

export default DataGraph;
