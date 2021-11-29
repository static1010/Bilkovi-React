import classes from "./MainPage.module.css";
import mainPicture from "../../img/bilki.png"

const MainPage = () => {
    return ( <
        div className = { classes.mainPicture } >
        <
        img src = { mainPicture }
        alt = "profile picturs" / >
        <
        /div>
    );
};

export default MainPage;