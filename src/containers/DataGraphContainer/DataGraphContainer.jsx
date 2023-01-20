import "./DataGraphContainer.scss";
import DataGraph from "../../components/DataGraph/DataGraph";

const DataGraphContainer = (data) => {
    return (
        <div className="datagraph-container">
            <DataGraph data={data} />
        </div>
    );
};

export default DataGraphContainer;
