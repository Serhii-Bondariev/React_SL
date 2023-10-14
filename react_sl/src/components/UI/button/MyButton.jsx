import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
    return (
        <myButton {...props} className={classes.myBtn}>
            {children}
        </myButton>
    );
}


export default MyButton;