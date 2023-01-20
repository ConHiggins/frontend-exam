import { useState } from "react";
import "./DataGraph.scss";
import ChartBar from "../ChartBar/ChartBar";
import { useEffect } from "react";

const DataGraph = ({ data }, activeProp) => {
    let todaysDate = new Date();
    const [startDate, setStartDate] = useState(1);
    const [endDate, setEndDate] = useState(10);
    const [displayData, setDisplayData] = useState([]);

    const getDataWithinTimeframe = (arr) => {
        return arr.filter((item, index) => {
            let itemDateSplit = item.Date.split("/"); /// Manual split as data is dd/mm/yyyy
            let dateObject = new Date(+itemDateSplit[2], itemDateSplit[1] - 1, +itemDateSplit[0]);

            return startDate <= dateObject.getDay() && dateObject.getDay() <= endDate;
        });
    };

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
        setDisplayData(getDisplayData(getDataWithinTimeframe(data.data), startDate, endDate));
    }, [data, startDate, endDate]);

    return <div className="datagraph">{displayData}</div>;
};

export default DataGraph;
