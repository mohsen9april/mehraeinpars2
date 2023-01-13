import React from "react";
import CountUp from "react-countup";
import "./ProductsCountUp.css";

const ProductsCountUp = () => {
  return (
    <div className="ProductsCountUp">
      <di className="CountUpBox">
        <h1> میانگین تولید ماه</h1>
        <CountUp
          start={0}
          end={61270}
          duration={2.1}
          separator=","
          decimals={""}
          decimal="."
          prefix="+ "
          suffix=""
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
          enableScrollSpy
          style={{ fontSize: "23px", fontWeight: "bold" }}
        />
      </di>
      <di className="CountUpBox">
        <h1>میانگین تولید سال</h1>
        <CountUp
          start={0}
          end={56785}
          duration={1.7}
          separator=","
          decimals={""}
          decimal="."
          prefix="+ "
          suffix=""
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
          enableScrollSpy
          style={{ fontSize: "23px", fontWeight: "bold" }}
        />
      </di>
      <di className="CountUpBox">
        <h1>تولید ماه جاری</h1>
        <CountUp
          start={0}
          end={1326700}
          duration={2.4}
          separator=","
          decimals={""}
          decimal="."
          prefix="+ "
          suffix=""
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
          enableScrollSpy
          style={{ fontSize: "23px", fontWeight: "bold" }}
        />
      </di>
      <di className="CountUpBox">
        <h1>تولید سال جاری</h1>
        <CountUp
          start={0}
          end={17152600}
          duration={3}
          separator=","
          decimals={""}
          decimal="."
          prefix="+ "
          suffix=""
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
          enableScrollSpy
          style={{ fontSize: "23px", fontWeight: "bold" }}
        />
      </di>
    </div>
  );
};

export default ProductsCountUp;
