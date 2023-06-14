import { Grid } from "@mui/material";

const GridLayout = () => {
    return ( 
        <Grid container spacing={2}>
            <Grid 
            item
            xs={12}
            sm={6}
            md={4}
            >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet sapiente laudantium, possimus, neque dolor quibusdam maiores nesciunt, illum doloremque voluptatibus. Perferendis dignissimos nemo ratione consequuntur, quod consequatur sit dicta!</p>
            </Grid>
            <Grid 
            item
            xs={12}
            sm={6}
            md={4}
            >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet sapiente laudantium, possimus, neque dolor quibusdam maiores nesciunt, illum doloremque voluptatibus. Perferendis dignissimos nemo ratione consequuntur, quod consequatur sit dicta!</p>
            </Grid>
            <Grid 
            item
            xs={12}
            sm={6}
            md={4}
            >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet sapiente laudantium, possimus, neque dolor quibusdam maiores nesciunt, illum doloremque voluptatibus. Perferendis dignissimos nemo ratione consequuntur, quod consequatur sit dicta!</p>
            </Grid>
        </Grid>
     );
}
 
export default GridLayout;