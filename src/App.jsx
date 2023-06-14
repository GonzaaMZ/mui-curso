
// eslint-disable-next-line no-unused-vars
import BoxComponent from "./components/Box";
import Contenedor from "./components/Container";
import BotonesIconos from "./components/BotonesIconos";
import GridLayout from "./components/GridLayout";
import Product from "./components/PracticaCard";
import { Container } from "@mui/material";
import Cards from "./components/Cards";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Container sx={{mt: 5}}>
      <Navbar />
    </Container>
    
      // <Cards></Cards>
      /* <Product></Product> */
    // <BoxComponent></BoxComponent>
    // <Contenedor></Contenedor>
    // <BotonesIconos></BotonesIconos>
    // <GridLayout></GridLayout>
  );
}

export default App;