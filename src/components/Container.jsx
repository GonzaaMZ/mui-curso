import { Button, Container, Typography } from "@mui/material";

const Contenedor = () => {
    return ( 
        <Container maxWidth="md" sx={{border: 2, boxShadow: 2, p: 5}}>
        <h1>App</h1>
        <Typography variant="h2" component="p" textAlign="center" mt={5} mb={5}>App con Typography</Typography>
        <Typography variant="h2" component="h1" color="primary">App con Typography</Typography>
        <Button variant="contained"> Mi Primer Boton</Button>
         </Container>
     );
}
 
export default Contenedor;