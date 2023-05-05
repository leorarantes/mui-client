import { Container } from "@mui/material";
import Menu from "../Menu";

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
        </Container>
    );
}

export default MainApp;