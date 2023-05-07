import React from "react";
import bg02 from "../../images/background-04.jpg";
import djStation from "../../images/dj-station.jpg";
import "../../App.css";

function Background(props) {
  return (
    <main>
      <div className="bg-div"></div>
      <img className="bg-effect" src={bg02} alt="" />
      <img className="dj-img" src={djStation} alt="" />
      {props.children}
    </main>
  );
}

export default Background;
