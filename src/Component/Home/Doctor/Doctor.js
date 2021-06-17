import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dr = ({ dr }) => {
  return (
    <div className="col-md-4 col-sm-6 text-center">
      {dr.image ? (
        <img
          style={{ height: "200px" }}
          src={`data:image/png;base64,${dr.image.img}`}
        />
      ) : (
        <img
          style={{ height: "200px" }}
          className="img-fluid mb-3"
          src={`http://localhost:5000/${dr.img}`}
          alt=""
        />
      )}
      <h4>{dr.name}</h4>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faPhone} />{" "}
        +880-188-934789
      </p>
    </div>
  );
};

export default dr;
