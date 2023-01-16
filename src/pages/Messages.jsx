import Barcharts from "./Barcharts/Barcharts";
import LineD from "./LineD";
import LineM from "./LineM";
import "./Messages.css";
import Piecharts from "./Piecharts/Piecharts";
import ProductsCountUp from "./ProductsCountUp";

const Messages = () => {
  return (
    <>
      <h2 className="h2_reports">گزارش تولید</h2>
      <div className="title_Reports">
        <div className="one">
          <LineD />
        </div>
        <div className="two">
          <LineM />
        </div>
      </div>
      <div className="counup">
        <ProductsCountUp />
      </div>
      <div>
        <Piecharts />
      </div>
      <div style={{ width: "50rem" }}>
        <Barcharts />
      </div>
    </>
  );
};

export default Messages;
