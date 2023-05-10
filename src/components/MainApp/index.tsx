import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import Alert from "../Alert";

function MainApp() {
    return (
        <Container sx={{
            background: "#ffffff",
            minWidth: "100vw",
            minHeight: "100vh",
            position: "relative",
            padding: "0px"
        }}>
            <Menu />
            <Outlet />
            <Alert />
        </Container>
    );
}

export default MainApp;