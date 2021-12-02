import imgPhone from "../../img/VectorPhone.png";
import imgProfile from "../../img/VectorProfil.png";
import imgBag from "../../img/VectorBag.png";
import classes from "./StoreImgNavBar.module.css";
const StoreImgNavBar = () => {
    return ( <
        div className = { classes.container } >
        <
        img src = { imgPhone }
        alt = "Phone"
        className = { classes.phone }
        />{" "} <
        img src = { imgProfile }
        alt = "Profile acaount" / >
        <
        img src = { imgBag }
        alt = "Bag to stor" / >
        <
        /div>
    );
};

export default StoreImgNavBar;