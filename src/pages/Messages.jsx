import LineD from "./LineD";
import LineM from "./LineM";
import "./Messages.css";
import ProductsCountUp from "./ProductsCountUp";

const Messages = () => {
  return (
    <>
      <h2>گزارش تولید</h2>
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
    </>
  );
};

export default Messages;
