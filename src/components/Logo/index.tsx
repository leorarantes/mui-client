import { Box, Typography } from "@mui/material";

interface LogoProps {
    fontSize: number
}

function Logo({fontSize}: LogoProps) {
    return (
        <Box
            sx={{
                maxHeight: `${(fontSize / 4) * 5}vw`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000000",
                borderRadius: `calc(${fontSize}vw + 1px)`,
                paddingX: `${fontSize / 4.1}vw`
            }}
        >
            <Typography
                component="h1"
                sx={{
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: `${fontSize}vw`,
                    lineHeight: "100%",
                    color: "#ffffff",
                    marginBottom: `${fontSize / 9}vw`
                }}>
                <Box
                    component="span"
                    fontWeight="bold"
                    color="#ffffff"
                >mui
                </Box>
                client
            </Typography>
        </Box>
    );
}

export default Logo;