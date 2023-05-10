import { useContext, useEffect, useState } from "react";

import AlertContext from "../../contexts/AlertContext";
import styles from "./index.module.css";
import ErrorIcon from "../../assets/images/error-icon.svg";
import SuccesIcon from "../../assets/images/success-icon.svg";
import WarningIcon from "../../assets/images/warning-icon.svg";
import CloseIcon from '@mui/icons-material/Close';

function Alert() {
    // contexts
    const {alertContext, setAlertContext} = useContext(AlertContext);

    // stateful objects
    const [timer, setTimer] = useState<any>(null);

    // methods
    function handleBackgroundColor() {
        if(!alertContext) return styles["none"];
        return styles[alertContext.type];
    }

    function handleVisibility() {
        if(!alertContext) return {transform: "rotateY(90deg)", transitionTimingFunction: "ease-out"};
        return {};
    }

    function handleIconType() {
        if(!alertContext) return undefined;
        switch(alertContext.type) {
            case "error":
                return ErrorIcon;
            case "success":
                return SuccesIcon;
            default:
                return WarningIcon;
        }
    }

    function handleMessage() {
        if(!alertContext) return null;
        return alertContext.message;
    }

    function handleClose() {
        clearTimeout(timer);
        setAlertContext(null);
    }

    // initialization
    useEffect(() => {
        if(alertContext) {
            clearTimeout(timer);
            setTimer(setTimeout(() => setAlertContext(null), 5000));
        }
    }, [alertContext]);

    // render
    return (
        <div className={handleBackgroundColor()} style={handleVisibility()}>
            <div>
                <img src={handleIconType()}/>
                <h1>{handleMessage()}</h1>
            </div>
            <div onClick={handleClose}><CloseIcon /></div>
        </div>
    );
}

export default Alert;