import { useState } from "react";
import "./DataGraph.scss";
import ChartBar from "../ChartBar/ChartBar";
import { useEffect } from "react";

const DataGraph = ({ data }) => {
    const [startDate, setStartDate] = useState(new Date(2018, 9, 1));
    const [endDate, setEndDate] = useState(new Date(2018, 9, 30));
    const [displayData, setDisplayData] = useState([]);

    const getDataWithinTimeframe = (arr) => {
        return arr.filter((item, index) => {
            let itemDateSplit = item.Date.split("/"); /// Manual split as data is dd/mm/yyyy
            let dateObject = new Date(+itemDateSplit[2], itemDateSplit[1] - 1, +itemDateSplit[0]);
            return startDate.getDay() <= dateObject.getDay() && dateObject.getDay() <= endDate.getDay();
        });
    };

    const getDisplayData = (arr, startDt, endDt) => {
        return arr?.slice(startDt, endDt).map((item, index) => {
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
        console.log(getDataWithinTimeframe(data.data));
        setDisplayData(getDisplayData(getDataWithinTimeframe(data.data), startDate.getDay(), endDate.getDay()));
        console.log(displayData);
    }, [data, startDate, endDate]);

    return (
        <>
            <p>Set start date:</p>
            <input
                type="date"
                onBlur={(e) => {
                    setStartDate(new Date(e.target.value));
                }}
            />
            <p>Set end date:</p>
            <input
                type="date"
                onBlur={(e) => {
                    setEndDate(new Date(e.target.value));
                }}
            />
            <div className="datagraph">
                <div className="datagraph__display-data">{displayData}</div>
            </div>
        </>
    );
};

export default DataGraph;
