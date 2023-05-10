import { TextField, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FormData, StepProps } from ".";

function SecondStep({ formData, setFormData, steps, setSteps }: StepProps) {
    const navigate = useNavigate();

    const [address1InputError, setAddress1InputError] = useState(false);
    const [address2InputError, setAddress2InputError] = useState(false);
    const [CEPInputError, setCEPInputError] = useState(false);

    function getSecondStepInvalidInputs(formData: FormData) {
        let invalidInputs: string[] = [];
        if (formData.address1.length < 1) invalidInputs.push("address1");
        if (formData.address2.length < 1) invalidInputs.push("address2");
        if (formData.CEP.length < 9) invalidInputs.push("CEP");
        if (invalidInputs.length > 0) return invalidInputs;
        return null;
    }

    function handleOnInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    }

    function handleCEPInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target) {
            const number = event.target.value;
            const newNumber = number.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
            setFormData({ ...formData, CEP: newNumber });
        }
    }

    function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const invalidInputs = getSecondStepInvalidInputs(formData);

        let newSteps = [...steps];
        if (!invalidInputs) {
            newSteps[1].isCompleted = 1;
            setSteps([...newSteps]);
        }
        else {
            newSteps[1].isCompleted = 0.5;
            setSteps([...newSteps]);
        }

        navigate("/app/novo-cliente/outras-informacoes");
    }

    function handleGoBackOnClick() {
        const invalidInputs = getSecondStepInvalidInputs(formData);

        let newSteps = [...steps];
        if (!invalidInputs) {
            newSteps[1].isCompleted = 1;
            setSteps([...newSteps]);
        }
        else {
            newSteps[1].isCompleted = 0.5;
            setSteps([...newSteps]);
        }

        setSteps([...newSteps]);
        navigate("/app/novo-cliente/informacoes-pessoais");
    }

    useEffect(() => {
        if (steps[1].isCompleted === 0.5) {
            const invalidInputs = getSecondStepInvalidInputs(formData);
            if (invalidInputs) invalidInputs.forEach((invalidInput: string) => {
                switch (invalidInput) {
                    case "address1":
                        setAddress1InputError(true);
                        break;
                    case "address2":
                        setAddress2InputError(true);
                        break;
                    default:
                        setCEPInputError(true);
                        break;
                }
            });
        }
        if (steps[1].isCompleted === 0) {
            let newSteps = [...steps];
            newSteps[1].isCompleted = 0.5;
            setSteps([...newSteps]);
        }
    }, []);

    return (
        <form onSubmit={handleOnSubmit}>
            <TextField
                name="address1"
                label="Endereço 1"
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
                value={formData.address1}
                error={address1InputError}
            />
            <TextField
                name="address2"
                label="Endereço 2"
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
                value={formData.address2}
                error={address2InputError}
            />
            <Box sx={{ width: "40vw", marginBottom: "20px", "@media (max-width: 600px)": {width: "80vw"} }}>
                <TextField
                    name="CEP"
                    label="CEP"
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
                    onChange={handleCEPInputOnChange}
                    value={formData.CEP}
                    error={CEPInputError}
                    inputProps={{ maxLength: 9 }}
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
                    Continuar
                </Button>
            </Box>
        </form>
    );
}

export default SecondStep;