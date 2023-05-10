import { Container, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FormData } from "../../components/Form";

function ClientsList() {
    const [clients, setClients] = useState<FormData[] | null>(null);

    useEffect(() => {
        async function load() {
            const { data } = await api.getClients();
            setClients([ ...data ]);
        }
        load();
    }, []);

    return (
        <Container
            sx={{
                width: "calc(100% - 280px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: "0px",
                left: "280px",
                paddingY: "30px",
                zIndex: "1",
                "@media (max-width: 600px)": {
                    width: "100%",
                    position: "static",
                    paddingY: "calc(8vh + 10px)",
                    paddingX: "0px"
                }
            }}
        >
            <Typography
                component="h1"
                sx={{
                    fontSize: "22px",
                    color: "#000000",
                    textAlign: "center",
                    marginBottom: "30px",
                    "@media (max-width: 600px)": {
                        marginY: "13px",
                        fontSize: "3vh"
                    }
                }}
            >
                Lista de clientes
            </Typography>
            {clients ? clients.map((client: any) => {
                const { id, name, lastName, email, phone, address1, address2, CEP, CPF, dateOfBirth, income } = client;
                return (
                    <Accordion
                        key={id}
                        sx={{
                            width: "calc(75% - 30px)",
                            backgroundColor: "none",
                            border: "solid 1px #b7b7b7",
                            marginBottom: "12px",
                            "@media (max-width: 600px)": {
                                width: "85%",
                                marginTop: "0px"
                            }
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography component="h2" sx={{ fontSize: "3vh", color: "#777777" }}>{name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ paddingTop: "0px" }}>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>Sobrenome: </span>
                                {lastName}
                            </Typography>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>E-mail: </span>
                                {email}
                            </Typography>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>Telefone: </span>
                                {phone}
                            </Typography>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>Endereço 1: </span>
                                {address1}
                            </Typography>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>Endereço 2: </span>
                                {address2}
                            </Typography>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>CEP: </span>
                                {CEP}
                            </Typography>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>CPF: </span>
                                {CPF}
                            </Typography>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>Data de nascimento: </span>
                                {dateOfBirth}
                            </Typography>
                            <Typography component="h3" sx={{ fontSize: "2.4vh", wordWrap: "break-word", "span": { fontWeight: "bold" } }}>
                                <span>Renda mensal: </span>
                                {income}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })
                :
                null
            }
        </Container>
    );
}

export default ClientsList;