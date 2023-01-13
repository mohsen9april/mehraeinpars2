import LineD from "./LineD";
import LineM from "./LineM";
import "./Messages.css";

const Messages = () => {
  return (
    <>
      <h2>Reports Page</h2>
      <div className="title_Reports">
        <div className="one">
          <LineD />
        </div>
        <div className="two">
          <LineM />
        </div>
      </div>
    </>
  );
};

export default Messages;
