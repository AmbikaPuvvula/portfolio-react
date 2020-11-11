import React from "react";
import Ammu from "../assets/Ammu.jpeg";
function Title(props){
    // const name = "Ambika Puvvula";
    const {name} = props;
    return(
        <div className="container card shadow">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={Ammu}
            alt="userimage"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize : "45px"}}>
    Hi..,I am <span className="text-info">{name}</span>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Title;