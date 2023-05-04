import { Container, Box, Typography, Button } from "@mui/material";
import Logo from "../../components/Logo";

function Home() {
    function handleLogoSize() {
        if(document.body.clientWidth > 600) return 9;
        return 14;
    }

    return (
        <Container
            sx={{
                background: "linear-gradient(to right, #5669CC , #A697EF)",
                width: "100vw",
                minWidth: "100vw",
                height: "100vh",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px"
            }}
        >
            <Logo fontSize={handleLogoSize()} />
            <Typography
                component="h2"
                sx={{
                    fontSize: "2vw",
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: "30px",
                    marginBottom: "20px",
                    "@media (max-width: 600px)": {
                        fontSize: "5.1vw"
                    }
                }}
            >
                Bem vindo!
            </Typography>
            <Typography
                component="h3"
                sx={{
                    fontSize: "1.5vw",
                    fontFamily: "Roboto",
                    color: "#ffffff",
                    marginBottom: "15px",
                    "@media (max-width: 600px)": {
                        fontSize: "4.5vw"
                    }
                }}
            >
                O que você deseja fazer?
            </Typography>
            <Box
                sx={{
                    width: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "@media (max-width: 600px)": {
                        width: "80%",
                        display: "block"
                    }
                }}
            >
                <Button
                    href="/app/novo-cliente"
                    variant="contained"
                    sx={{
                        width: "40%",
                        backgroundColor: "#ffffff",
                        borderRadius: "1.7vw",
                        marginRight: "20px",
                        paddingY: "0.4vw",
                        fontSize: "1.6vw",
                        fontWeight: "bold",
                        color: "#5669CC",
                        textTransform: "none",
                        textDecoration: "none",
                        ":hover": {
                            backgroundColor: "#344ED4",
                            color: "#ffffff"
                        },
                        "@media (max-width: 600px)": {
                            width: "100%",
                            borderRadius: "4.1vw",
                            fontSize: "4vw",
                            paddingY: "1vw",
                            marginBottom: "15px"
                        }
                    }}
                >
                    Cadastrar cliente
                </Button>
                <Button
                    href="/app/clientes"
                    variant="contained"
                    sx={{
                        width: "40%",
                        backgroundColor: "#ffffff",
                        borderRadius: "1.7vw",
                        paddingY: "0.4vw",
                        fontSize: "1.6vw",
                        fontWeight: "bold",
                        color: "#5669CC",
                        textTransform: "none",
                        textDecoration: "none",
                        ":hover": {
                            backgroundColor: "#344ED4",
                            color: "#ffffff"
                        },
                        "@media (max-width: 600px)": {
                            width: "100%",
                            borderRadius: "4.1vw",
                            fontSize: "4vw",
                            paddingY: "1vw"
                        }
                    }}
                >
                    Listar clientes
                </Button>
            </Box>
        </Container >
    );
}

export default Home;