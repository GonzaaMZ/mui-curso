import { Box, Container } from "@mui/material";

const BoxComponent = () => {
    return (
        <Container>
            <h1>App</h1>
            <Box 
            sx={{
                border: 2, 
                p: 3,
                borderColor: "peru",
                bgcolor: '#111',
                color: "white"
                }}>
                Curso MUI
            </Box>
        </Container>
    );
}

export default BoxComponent;
