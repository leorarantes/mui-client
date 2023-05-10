import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

import Stepper from "../Stepper";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

interface FormProps {
    step: {
        name: string,
        index: number
    }
}

interface Step {
    index: number;
    isCompleted: number;
}

export interface FormData {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    CEP: string;
    CPF: string;
    dateOfBirth: string;
    income: string | number;
    success?: boolean
}

export interface StepProps {
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
    steps: Step[];
    setSteps: Dispatch<SetStateAction<Step[]>>;
}

export const emptyFormData = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    CEP: "",
    CPF: "",
    dateOfBirth: "",
    income: ""
}

export const emptySteps = [
    { index: 1, isCompleted: 0 },
    { index: 2, isCompleted: 0 },
    { index: 3, isCompleted: 0 },
    { index: 4, isCompleted: 0 }
]

function Form({ step }: FormProps) {
    const [steps, setSteps] = useState<Step[]>([...emptySteps]);

    
    const [formData, setFormData] = useState<FormData>({...emptyFormData});

    switch (step.index) {
        case 1:
            return (
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0px"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "22px",
                            color: "#000000",
                            textAlign: "center",
                            marginBottom: "18px",
                            "@media (max-width: 600px)": {
                                marginTop: "13px",
                                fontSize: "3vh"
                            }
                        }}
                    >
                        {step.name}
                    </Typography>
                    <Stepper currentStepIndex={step.index} steps={steps} />
                    <FirstStep
                        formData={formData}
                        setFormData={setFormData}
                        steps={steps}
                        setSteps={setSteps}
                    />
                </Container>
            );
        case 2:
            return (
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0px"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "22px",
                            color: "#000000",
                            textAlign: "center",
                            marginBottom: "18px",
                            "@media (max-width: 600px)": {
                                fontSize: "3vh"
                            }
                        }}
                    >
                        {step.name}
                    </Typography>
                    <Stepper currentStepIndex={step.index} steps={steps} />
                    <SecondStep
                        formData={formData}
                        setFormData={setFormData}
                        steps={steps}
                        setSteps={setSteps}
                    />
                </Container>
            );
            case 3:
                return (
                    <Container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0px"
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "22px",
                                color: "#000000",
                                textAlign: "center",
                                marginBottom: "18px",
                                "@media (max-width: 600px)": {
                                    fontSize: "3vh"
                                }
                            }}
                        >
                            {step.name}
                        </Typography>
                        <Stepper currentStepIndex={step.index} steps={steps} />
                        <ThirdStep
                            formData={formData}
                            setFormData={setFormData}
                            steps={steps}
                            setSteps={setSteps}
                        />
                    </Container>
                );
        default:
            return (
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "22px",
                            color: "#000000",
                            textAlign: "center",
                            marginBottom: "18px",
                            "@media (max-width: 600px)": {
                                fontSize: "3vh",
                                marginTop: "18px"
                            }
                        }}
                    >
                        {step.name}
                    </Typography>
                    <Stepper currentStepIndex={step.index} steps={steps} />
                    <FourthStep
                        formData={formData}
                        setFormData={setFormData}
                        steps={steps}
                        setSteps={setSteps}
                    />
                </Container>
            );
    }

}

export default Form;