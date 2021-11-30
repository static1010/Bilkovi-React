import classes from "./MainPage.module.css";
import mainPicture from "../../img/bilki.png";
import BtnMainPage from "./BtnMainPaig";

const MainPage = () => {
    return ( <
        div className = { classes.mainPicture } >
        <
        img src = { mainPicture }
        alt = "profile picturs" / >
        <
        div className = { classes.divText } >
        <
        h1 > БИЛКОВИ ТИНКТУРИ < /h1>{" "} <
        p >
        Специално подбрана комбинация от билки. < br / > Чисти билкови екстракти. { " " } <
        /p>{" "} <
        /div>{" "} <
        BtnMainPage / >
        <
        /div>
    );
};

export default MainPage;