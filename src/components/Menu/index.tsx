import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { HowToRegRounded, FormatListBulletedRounded } from '@mui/icons-material';
import Logo from "../Logo";

function Menu() {
    function handleButtonSelection(name: string) {
        const translatedName = name === "new client" ? "novo-cliente" : "clientes";
        const path = window.location.pathname.split("/")[2];
        if (path === translatedName) return {
            backgroundColor: "#ffffff",
            color: "#5669CC",
            ":hover": {
                backgroundColor: "#ffffff",
                color: "#5669CC",
            }
        };
        return {
            color: "#ffffff",
            backgroundColor: "#5669CC",
            ":hover": {
                backgroundColor: "#ffffff",
                color: "#5669CC",
                opacity: "0.3"
            }
        };
    }

    function handleLogoFontSize() {
        if (document.body.clientWidth > 600) return { value: 30, unity: "px" };
        return { value: 4, unity: "vh" };
    }

    function handleButtonContent(content: string) {
        if (document.body.clientWidth > 600) return content;
        return null;
    }

    function handleContainerComponentType() {
        if (document.body.clientWidth > 600) return "nav";
        return "header";
    }

    return (
        <Container
            component={handleContainerComponentType()}
            sx={{
                width: "250px",
                height: "100vh",
                backgroundColor: "#5669CC",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
                top: "0",
                left: "0",
                paddingY: "30px",
                zIndex: "2",
                "@media (max-width: 600px)": {
                    width: "100vw",
                    height: "8vh",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "0px 15px 0px 15px"
                }
            }}
        >
            <Logo fontSize={handleLogoFontSize()} />
            <Divider
                sx={{
                    width: "80%",
                    height: "2px",
                    backgroundColor: "#ffffff",
                    opacity: "0.7",
                    marginTop: "30px",
                    marginBottom: "30px",
                    "@media (max-width: 600px)": {
                        display: "none"
                    }
                }}
            />
            <Box sx={{ width: "100%", "@media (max-width: 600px)": { width: "fit-content", display: "flex" }}}>
                <Button
                    href="/app/novo-cliente"
                    sx={[
                        {
                            width: "100%",
                            justifyContent: "flex-start",
                            borderRadius: "26px",
                            paddingY: "7px",
                            paddingLeft: "30px",
                            marginBottom: "10px",
                            fontSize: "15px",
                            fontWeight: "bold",
                            textTransform: "none",
                            "@media (max-width: 600px)": {
                                width: "6vh",
                                minWidth: "6vh",
                                height: "6vh",
                                borderRadius: "50%",
                                padding: "0px 0px 0px 1.4vh",
                                margin: "0px 15px 0px 0px"
                            }
                        },
                        handleButtonSelection("new client")
                    ]}
                    startIcon={<HowToRegRounded sx={{ "@media (max-width: 600px)": {width: "5vh", height: "5vh" }}} />}
                >
                    {handleButtonContent("Novo cliente")}
                </Button>
                <Button
                    href="/app/clientes"
                    sx={[
                        {
                            width: "100%",
                            justifyContent: "flex-start",
                            borderRadius: "26px",
                            paddingY: "7px",
                            paddingLeft: "30px",
                            fontSize: "15px",
                            fontWeight: "bold",
                            textTransform: "none",
                            "@media (max-width: 600px)": {
                                width: "6vh",
                                minWidth: "6vh",
                                height: "6vh",
                                borderRadius: "50%",
                                padding: "0px 0px 0px 1.4vh"
                            }
                        },
                        handleButtonSelection("clients")
                    ]}
                    startIcon={<FormatListBulletedRounded sx={{ "@media (max-width: 600px)": {width: "4.5vh", height: "4.5vh" }}} />}
                >
                    {handleButtonContent("Lista de clientes")}
                </Button>
            </Box>
        </Container>
    );
}

export default Menu;