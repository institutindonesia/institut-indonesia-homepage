import React, { useState } from "react";
import En from "../assets/lang/En.inline.svg"
import Id from "../assets/lang/Id.inline.svg"
const AddTripButton = (props) => {
    const [tripType, setTripType] = useState("En");
    let IconLang;
    if (props.icon === "en") {
        IconLang = <h5> En </h5>
    } else if (props.icon === "id") {
        IconLang = <h5> Id </h5>
    } else {
        IconLang = <></>
    };
    // <button onClick={props.addTrip} className={props.checked}>
    //     {IconLang}
    // </button>
    console.log(props.addTrip)
    return (
        <div className="AddTripButton">
                <div
                    className="radio-btn"
                    onClick={() => {
                        props.addTrip;
                        setTripType("En");
                    }}
                >
                    <input
                        type="radio"
                        value={tripType}
                        name="En"
                        checked={tripType == "En"}
                    />
                <label for="En">En</label>
                </div>
                <div
                    className="radio-btn"
                    onClick={() => {
                        props.addTrip
                        setTripType("Id");
                    }}
                >
                    <input
                        type="radio"
                        value={tripType}
                        name="Id"
                        checked={tripType == "Id"}
                    />
                <label for="Id">Id</label>
                    
                </div>
        </div>
    )
}

export default AddTripButton