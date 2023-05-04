import { Container, Box, Typography, Button } from "@mui/material";
import {HowToRegRounded, FormatListBulletedRounded} from '@mui/icons-material';

function Home() {
    return (
        <Container
            sx={{
                "@media (min-width: 600px)": {
                    padding: "0px"
                },
                width: "100vw",
                minWidth: "100vw",
                height: "100vh",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "space-between",
                padding: "0px"
            }}
        >
            <Box
                sx={{
                    width: "58%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px"
                }}
            >
                <Box>
                    <Typography
                        component="h1"
                        sx={{
                            fontFamily: "Plus Jakarta Sans",
                            fontSize: "9vw",
                            fontStyle: "italic",
                            lineHeight: "120%"
                        }}>
                        <Box
                            component="span"
                            fontWeight="fontWeightBold"
                            color="#1e84ea"
                            fontStyle="normal"
                        >MUI
                        </Box>
                        Client
                    </Typography>
                    <Typography
                        component="h2"
                        sx={{
                            width: "70%",
                            fontSize: "1.6vw",
                            fontStyle: "italic",
                            marginLeft: "5px"
                        }}
                    >
                        A melhor solução para cadastro e listagem de clientes.
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "42%",
                    height: "100%",
                    backgroundColor: "#1E84EA",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px"
                }}
            >
                <Typography
                    component="h2"
                    sx={{
                        fontSize: "1.7vw",
                        color: "#ffffff",
                        marginBottom: "20px"
                    }}
                >
                    O que você deseja fazer?
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        width: "70%",
                        backgroundColor: "#004AAD",
                        fontSize: "1.5vw",
                        fontWeight: "bold",
                        color: "#ffffff",
                        marginBottom: "20px",
                        textTransform: "none"
                    }}
                    endIcon={<HowToRegRounded />}
                >
                    Cadastrar cliente
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        width: "70%",
                        backgroundColor: "#004AAD",
                        fontSize: "1.5vw",
                        fontWeight: "bold",
                        color: "#ffffff",
                        textTransform: "none"
                    }}
                    endIcon={<FormatListBulletedRounded />}
                >
                    Listar clientes
                </Button>
            </Box>
        </Container>
    );
}

export default Home;