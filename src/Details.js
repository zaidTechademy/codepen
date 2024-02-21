import React from "react";
import { Link } from "react-router-dom";

function Details({ arraydata }) {
  return (
    <div style={{marginTop : "265 px"}}>
      {arraydata.map((data) => {
        return (
          <div style={{ textAlign: "left" }}>
            <Link to={`/display/${data.id}`} target="_blank" component="a">
              {data.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Details;
