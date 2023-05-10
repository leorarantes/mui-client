import { TextField, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FormData, StepProps } from ".";

function validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function FirstStep({ formData, setFormData, steps, setSteps }: StepProps) {
    const navigate = useNavigate();

    const [nameInputError, setNameInputError] = useState(false);
    const [lastNameInputError, setLastNameInputError] = useState(false);
    const [emailInputError, setEmailInputError] = useState(false);
    const [phoneInputError, setPhoneInputError] = useState(false);

    function getFirstStepInvalidInputs(formData: FormData) {
        let invalidInputs: string[] = [];
        if (formData.name.length < 1) invalidInputs.push("name");
        if (formData.lastName.length < 1) invalidInputs.push("lastName");
        if (!validateEmail(formData.email)) invalidInputs.push("email");
        if (formData.phone.length < 15) invalidInputs.push("phone");
        if (invalidInputs.length > 0) return invalidInputs;
        return null;
    }

    function handleOnInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    }

    function handlePhoneInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            const number = event.target.value;
            const newNumber = number
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{5})(\d)/, '$1-$2')
            setFormData({...formData, phone: newNumber});
        }
    }

    function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const invalidInputs = getFirstStepInvalidInputs(formData);
        
        let newSteps = [...steps];
        if (!invalidInputs) {
            newSteps[0].isCompleted = 1;
            setSteps([...newSteps]);
        }
        else {
            newSteps[0].isCompleted = 0.5;
            setSteps([...newSteps]);
        }
        
        navigate("/app/novo-cliente/endereco");
    }

    useEffect(() => {
        if (steps[0].isCompleted === 0.5) {
            const invalidInputs = getFirstStepInvalidInputs(formData);
            if (invalidInputs) invalidInputs.forEach((invalidInput: string) => {
                switch (invalidInput) {
                    case "name":
                        setNameInputError(true);
                        break;
                    case "lastName":
                        setLastNameInputError(true);
                        break;
                    case "email":
                        setEmailInputError(true);
                        break;
                    default:
                        setPhoneInputError(true);
                        break;
                }
            });
        }
        if (steps[0].isCompleted === 0) {
            let newSteps = [...steps];
            newSteps[0].isCompleted = 0.5;
            setSteps([...newSteps]);
        }
    }, []);

    return (
        <form onSubmit={handleOnSubmit}>
            <TextField
                name="name"
                label="Nome"
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
                onChange={handleOnInputChange}
                value={formData.name}
                error={nameInputError}
            />
            <TextField
                name="lastName"
                label="Sobrenome"
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
                onChange={handleOnInputChange}
                value={formData.lastName}
                error={lastNameInputError}
            />
            <Box
                sx={{
                    width: "40vw",
                    display: "flex",
                    marginBottom: "20px",
                    "@media (max-width: 600px)": {
                        width: "80vw",
                        display: "block"
                    }
                }}
            >
                <TextField
                    name="email"
                    label="E-mail"
                    variant="outlined"
                    sx={{
                        width: "calc(60% - 10px)",
                        marginRight: "10px",
                        "@media (max-width: 600px)": {
                            width: "100%",
                            marginRight: "0px",
                            marginBottom: "15px",
                            "input": {
                                fontSize: "4vw"
                            }
                        }
                    }}
                    onChange={handleOnInputChange}
                    value={formData.email}
                    error={emailInputError}
                />
                <TextField
                    name="phone"
                    label="Telefone"
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
                    onChange={handlePhoneInputChange}
                    value={formData.phone}
                    error={phoneInputError}
                    inputProps={{ maxLength: 15 }}
                />
            </Box>
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
                Continuar
            </Button>
        </form>
    );
}

export default FirstStep;