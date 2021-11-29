import React from "react";
import classes from './BtnsNavBar.module.css'
const BtnsNavBar = () => {
    return ( <
        React.Fragment >
        <
        a href = "btns"
        className = { `${classes.btnOne} ${classes.btnCenter}` } >
        НАЧАЛО { " " } <
        /a>{" "} <
        /React.Fragment>
    );
};

export default BtnsNavBar;