import "./DataGraphContainer.scss";
import DataGraph from "../../components/DataGraph/DataGraph";

const DataGraphContainer = (data, activeProp) => {
    return <DataGraph data={data} activeProp={activeProp} />;
};

export default DataGraphContainer;
