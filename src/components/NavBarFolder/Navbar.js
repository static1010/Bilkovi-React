import React from "react";
import BtnsNavBar from "./BtnsNavBar";
import classes from "./NavBar.module.css";
import StoreImgNavBar from "./StoreImgNavBar";
import TeraPicture from "./TeraPicture";
const NavBar = () => {
    return ( <
        React.Fragment > { " " } < TeraPicture / >
        <
        nav className = { classes.NVBar } > { " " }

        <
        BtnsNavBar / > < StoreImgNavBar / >
        <
        /nav>{" "} <
        /React.Fragment>
    );
};

export default NavBar;