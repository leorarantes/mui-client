import { TextField, Box, Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FormData, StepProps } from ".";
import AlertContext from "../../contexts/AlertContext";
import api from "../../services/api";

function ThirdStep({ formData, setFormData, steps, setSteps }: StepProps) {
    const { setAlertContext } = useContext(AlertContext);
    const navigate = useNavigate();

    const [CPFInputError, setCPFInputError] = useState(false);
    const [dateOfBirthInputError, setDateOfBirthInputError] = useState(false);
    const [incomeInputError, setIncomeInputError] = useState(false);

    function getThirdStepInvalidInputs(formData: FormData) {
        let invalidInputs: string[] = [];
        if (formData.CPF.length < 14) invalidInputs.push("CPF");
        if (formData.dateOfBirth.length < 10) invalidInputs.push("dateOfBirth");
        if (formData.income.toString().length < 1) invalidInputs.push("income");
        if (invalidInputs.length > 0) return invalidInputs;
        return null;
    }

    function handleIncomeInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        const number = event.target.value;
        const newNumber = number.replace(/[^0-9]/, '')
        setFormData({...formData, income: newNumber});
    }

    function handleDateOfBirthInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            const date = event.target.value;
            const newDate = date
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1/$2')
                .replace(/(\d{2})\/(\d{2})(\d{1,4})/, '$1/$2/$3')
            setFormData({...formData, dateOfBirth: newDate});
        }
    }

    function handleCPFInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            const number = event.target.value;
            const newNumber = number
                .replace(/\D/g, '')
                .replace(/^(\d{3})(\d)/, '$1.$2')
                .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
                .replace(/\.(\d{3})(\d)/, '.$1-$2')
            setFormData({ ...formData, CPF: newNumber });
        }
    }

    async function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const invalidInputs = getThirdStepInvalidInputs(formData);
        
        let newSteps = [...steps];
        if(invalidInputs) {
            newSteps[2].isCompleted = 0.5;
            setSteps([...newSteps]);
            return;
        }

        try {
            await api.createClient({...formData, income: parseInt(formData.income.toString())});
            newSteps[2].isCompleted = 1;
            newSteps[3].isCompleted = 1;
            setSteps([...newSteps]);
            setFormData({...formData, success: true});
            navigate("/app/novo-cliente/confirmacao");
        }
        catch (error: any) {
            if(error.response) {
                switch(error.response.status) {
                    case 409:
                        setAlertContext({ type: "error", message: "Cliente já cadastrado." });
                        break;
                    case 422:
                        setAlertContext({ type: "error", message: "Todos os campos são obrigatórios." });
                        break;
                    default:
                        setAlertContext({ type: "error", message: "Erro, tente novamente mais tarde." });
                }
            }
            else setAlertContext({ type: "error", message: "Erro, tente novamente mais tarde." })
        }
    }

    function handleGoBackOnClick() {
        const invalidInputs = getThirdStepInvalidInputs(formData);
        
        let newSteps = [...steps];
        if (!invalidInputs) {
            newSteps[2].isCompleted = 1;
            setSteps([...newSteps]);
        }
        else {
            newSteps[2].isCompleted = 0.5;
            setSteps([...newSteps]);
        }

        setSteps([...newSteps]);
        navigate("/app/novo-cliente/endereco");
    }

    useEffect(() => {
        if (steps[2].isCompleted === 0.5) {
            const invalidInputs = getThirdStepInvalidInputs(formData);
            if (invalidInputs) invalidInputs.forEach((invalidInput: string) => {
                switch (invalidInput) {
                    case "CPF":
                        setCPFInputError(true);
                        break;
                    case "dateOfBirth":
                        setDateOfBirthInputError(true);
                        break;
                    default:
                        setIncomeInputError(true);
                        break;
                }
            });
        }
        if (steps[2].isCompleted === 0) {
            let newSteps = [...steps];
            newSteps[2].isCompleted = 0.5;
            setSteps([...newSteps]);
        }
    }, []);

    return (
        <form onSubmit={handleOnSubmit}>
            <TextField
                name="CPF"
                label="CPF"
                variant="outlined"
                sx={{
                    width: "40vw",
                    marginBottom: "15px",
                    "@media (max-width: 600px)": {
                        width: "80vw",
                        "input": {
                            fontSize: "4vw"
                        }
                    }
                }}
                onChange={handleCPFInputOnChange}
                value={formData.CPF}
                error={CPFInputError}
                inputProps={{ maxLength: 14 }}
            />
            <TextField
                name="dateOfBirth"
                label="Data de nascimento"
                variant="outlined"
                sx={{
                    width: "40vw",
                    marginBottom: "15px",
                    "@media (max-width: 600px)": {
                        width: "80vw",
                        "input": {
                            fontSize: "4vw"
                        }
                    }
                }}
                onChange={handleDateOfBirthInputOnChange}
                value={formData.dateOfBirth}
                error={dateOfBirthInputError}
                inputProps={{ maxLength: 10 }}
            />
            <Box sx={{ width: "40vw", marginBottom: "20px", "@media (max-width: 600px)": {width: "80vw"} }}>
                <TextField
                    name="income"
                    label="Renda mensal"
                    variant="outlined"
                    sx={{
                        width: "40%",
                        "@media (max-width: 600px)": {
                            width: "100%",
                            "input": {
                                fontSize: "4vw"
                            }
                        }
                    }}
                    onChange={handleIncomeInputOnChange}
                    value={formData.income}
                    error={incomeInputError}
                />
            </Box>
            <Box sx={{ display: "flex" }}>
                <Button
                    sx={{
                        width: "12vw",
                        backgroundColor: "#000000",
                        borderRadius: "calc(10vw + 1px)",
                        marginRight: "10px",
                        fontSize: "1.5vw",
                        fontWeight: "bold",
                        color: "#ffffff",
                        textTransform: "none",
                        ":hover": {
                            backgroundColor: "#000000",
                            opacity: "0.7",
                            color: "#ffffff"
                        },
                        "@media (max-width: 600px)": {
                            width: "30vw",
                            fontSize: "4vw"
                        }
                    }}
                    onClick={handleGoBackOnClick}
                >
                    Voltar
                </Button>
                <Button
                    type="submit"
                    sx={{
                        width: "12vw",
                        backgroundColor: "#000000",
                        borderRadius: "calc(10vw + 1px)",
                        fontSize: "1.5vw",
                        fontWeight: "bold",
                        color: "#ffffff",
                        textTransform: "none",
                        ":hover": {
                            backgroundColor: "#000000",
                            opacity: "0.7",
                            color: "#ffffff"
                        },
                        "@media (max-width: 600px)": {
                            width: "30vw",
                            fontSize: "4vw"
                        }
                    }}
                >
                    Finalizar
                </Button>
            </Box>
        </form>
    );
}

export default ThirdStep;