import React from "react";
import img from "../../../images/Mask Group 3.png";

const DentalCare = () => {
  return (
    <div className="container mt-5" style={{ marginBottom: "150px" }}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-5 ">
          <img
            style={{ height: "500px" }}
            className="img-fluid rounded "
            src={img}
            alt=""
          />
        </div>
        <div className="col-md-7 ">
          <h1 className="mt-5 mb-5">
            Exceptional Dental
            <br /> Care, on Your Terms
          </h1>
          <small style={{ wordSpacing: "3px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Quidem eveniet magni numquam, nam ipsam iusto acc
            <br />
            usamus obcaecati, blanditiis labore repellendus commodi
            <br /> expedita ipsa ut nisi quaerat maiores, nulla est.
            Accusantium.
            <br />
            usamus obcaecati, blanditiis labore repellendus commodi
            <br />
            usamus obcaecati, blanditiis labore repellendus commodi
            <br /> expedita ipsa ut nisi quaerat maiores,
            <br /> nulla est. Accusantium.
          </small>
          <br />
          <button className="header-button mt-5">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
