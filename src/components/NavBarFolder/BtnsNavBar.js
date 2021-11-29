import React from "react";
import classes from "./BtnsNavBar.module.css";
const BtnsNavBar = () => {
    return ( <
        React.Fragment >
        <
        a href = "btns"
        className = { `${classes.btnOne} ${classes.btnCenter}` } >
        НАЧАЛО <
        /a> <
        a href = "btns"
        className = { `${classes.btnOne} ${classes.btnCenter}` } >
        ПРОДУКТИ <
        /a><a href="btns" className={`${classes.btnOne} ${classes.btnCenter}`}>
        КАТЕГОРИИ <
        /a><a href="btns" className={`${classes.btnOne} ${classes.btnCenter}`}>
        ЗА НАС <
        /a><a href="btns" className={`${classes.btnOne} ${classes.btnCenter}`}>
        ПАРТНЬОРИ <
        /a><a href="btns" className={`${classes.btnOne} ${classes.btnCenter}`}>
        БЛОГ <
        /a><a href="btns" className={`${classes.btnOne} ${classes.btnCenter}`}>
        КОНТАКТИ <
        /a> <
        /React.Fragment>
    );
};

export default BtnsNavBar;