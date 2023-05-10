import { Box, Container, Divider } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

interface Step {
    index: number;
    isCompleted: number;
};

interface StepperProps {
    currentStepIndex: number;
    steps: Step[];
}

function Stepper({ currentStepIndex, steps }: StepperProps) {
    const stepsNumber = steps.length;
    
    const dividerWidth = (screenType: string) => {
        const totalWidth = 100;
        const stepWidth = 3;
        if(screenType === "desktop") return `calc(${totalWidth / 3}% - ${(stepWidth * stepsNumber) / 3}vw - ${(stepsNumber * 2 * 5) / 3}px)`;
        return `calc(${totalWidth / 3}% - ${(stepWidth * stepsNumber) / 3}vw - ${(stepsNumber * 2 * 5)}px)`;
    }

    const stepDynamicStyles = (step: Step) => {
        if(step.index === currentStepIndex) return {backgroundColor: "#5669CC", border: "none"};
        switch(step.isCompleted) {
            case 1:
                return {backgroundColor: "#5669CC", border: "none"};
            case 0.5:
                return {backgroundColor: "#ff6666", border: "none"};
            default:
                return {backgroundColor: "none", border: "2px solid #5669CC", color: "#5669CC"};
        }
    }

    const stepIcon = (step: Step) => {
        if(step.index === currentStepIndex) return step.index;
        switch(step.isCompleted) {
            case 1:
                return (
                    <CheckIcon
                        sx={{
                            width: "23px",
                            height: "23px",
                            "@media (max-width: 600px)": {
                                width: "5vw",
                                height: "5vw",
                            }
                        }}
                    />
                );
            case 0.5:
                return "!";
            default:
                return step.index;
        }
    }

    return (
        <Container
            sx={{
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "50px",
                padding: "0px"
            }}
        >
            {steps.map((step: Step) =>
                <>
                    <Box
                        key={step.index}
                        sx={[
                            {
                                minWidth: "30px",
                                maxWidth: "30px",
                                minHeight: "30px",
                                maxHeight: "30px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                marginX: "5px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ffffff",
                                "@media (max-width: 600px)": {
                                    minWidth: "7vw",
                                    maxWidth: "7vw",
                                    minHeight: "7vw",
                                    maxHeight: "7vw",
                                    fontSize: "4vw",
                                }
                            },
                            stepDynamicStyles(step)
                        ]}
                    >
                        {stepIcon(step)}
                    </Box>
                    {step !== steps[stepsNumber-1] ? 
                        <Divider
                            sx={{
                                width: dividerWidth("desktop"),
                                height: "2px",
                                backgroundColor: "#000000",
                                opacity: "0.2",
                                "@media (max-width: 600px)": {
                                    width: dividerWidth("mobile")
                                }
                            }}
                        />
                        :
                        null
                    }
                </>
            )}
        </Container>
    );
}

export default Stepper;

