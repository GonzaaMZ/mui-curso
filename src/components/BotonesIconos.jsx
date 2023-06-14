import { Button, Container } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AndroidIcon from "@mui/icons-material/Android";

const BotonesIconos = () => {
    return ( 
        <Container maxWidth="md" sx={{border: 2, boxShadow: 2, p: 2, mt: 5}}>
        <Button variant="outlined" color="info" startIcon={<AirplanemodeActiveIcon/>}>Boton</Button>
        <Button variant="contained" color="error" endIcon={<AndroidIcon/>}>Boton</Button>
        </Container>
     );
}
 
export default BotonesIconos;