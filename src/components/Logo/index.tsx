import { Box, Typography } from "@mui/material";

interface LogoProps {
    fontSize: {
        value: number,
        unity: string
    }
}

function Logo({fontSize: {value, unity}}: LogoProps) {
    return (
        <Box
            sx={{
                maxHeight: `${(value / 4) * 5}${unity}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000000",
                borderRadius: `calc(${value}${unity} + 1px)`,
                paddingX: `${value / 4.1}${unity}`
            }}
        >
            <Typography
                component="h1"
                sx={{
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: `${value}${unity}`,
                    lineHeight: "100%",
                    color: "#ffffff",
                    marginBottom: `${value / 9}${unity}`
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