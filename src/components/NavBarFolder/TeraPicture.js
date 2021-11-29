import React from "react";
import Terapicture from "../../img/Rectangle1.png";
import classes from "./TeraPicture.module.css"

const TeraPicture = () => {
    return ( <
        div >
        <
        img src = { Terapicture }
        alt = "Tera"
        className = { classes.terapic }
        /> <
        /div>
    );
};

export default TeraPicture;