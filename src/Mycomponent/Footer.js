import React from "react";

function Footer(props) {
    return (
        <div className="row fixed-bottom">
            <button className="btn btn-danger col-2" onClick={()=>{props.reset()}}>Reset</button>
            <div className="col-8 bg-dark text-center text-white">{props.totalAmount}</div>
            <button className="btn btn-primary col-2">Pay Now</button>
        </div>
    );
}

export default Footer;
