import { Container, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { StepProps } from ".";
import { emptyFormData } from ".";

function FourthStep({formData, setFormData, steps, setSteps}: StepProps) {
    const navigate = useNavigate();

    useEffect(() => {
        if(!formData.success) navigate("/app/novo-cliente/informacoes-pessoais");
        else setFormData({...emptyFormData});
    }, []);

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20vh"
            }}
        >
            <Typography
                sx={{
                    fontSize: "2vw",
                    color: "#4E9A51",
                    "@media (max-width: 600px)": {
                        fontSize: "4vw"
                    }
                }}
            >
                Cliente cadastrado com sucesso!
            </Typography>
            <CheckIcon
                sx={{
                    color: "#4E9A51",
                    width: "4vw",
                    height: "4vw",
                    marginLeft: "5px",
                    "@media (max-width: 600px)": {
                        width: "8vw",
                        height: "8vw"
                    }
                }}
            />
        </Container>
    );
}

export default FourthStep;