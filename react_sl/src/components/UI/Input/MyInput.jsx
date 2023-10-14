import React from "react";
import classes from "./MyInput.module.css";

const Myinput = (props) => {
    return (
        <div>
            <input className={classes.myInput} {...props} />
        </div>
    );
};


export default Myinput;