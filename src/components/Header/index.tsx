import { Container, Typography } from "@mui/material";

function Header() {
    function handlePageName() {
        if(window.location.pathname === "/app/novo-cliente") return "Novo cliente";
        return "Lista de clientes";
    }

    return (
        <Container
            component="header"
            sx={{
                minWidth: "100vw",
                height: "12.5vh",
                backgroundColor: "#000000",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "1"
            }}
        >
            <Typography
                sx={{
                    position: "absolute",
                    top: "5vh",
                    left: "calc(18vw + 50px)",
                    fontSize: "2.5vh",
                    lineHeight: "100%",
                    color: "#ffffff"
                }}
            >
                {handlePageName()}
            </Typography>
        </Container>
    );
}

export default Header;