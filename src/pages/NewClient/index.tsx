import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import Form from "../../components/Form";

function NewClient() {
    const step: {name: string, index: number} | null = getStep(useParams().step || null);

    function getStep(params: string | null) {
        switch(params) {
            case "informacoes-pessoais":
                return {name: "Informações pessoais", index: 1};
            case "endereco":
                return {name: "Endereço", index: 2};
            case "outras-informacoes":
                return {name: "Outras informações", index: 3};
            case "confirmacao":
                return {name: "Confirmação", index: 4};;
            default:
                return null;
        }
    }

    if(!step) return (<></>);
    return (
        <Container
            sx={{
                width: "calc(100% - 280px)",
                height: "100%",
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
            <Form step={step} />
        </Container>
    );
}

export default NewClient;