import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const Cards = () => {
    return (
        <Card sx={{
            transition: "0.2s",
            "&:hover": {
                transform: "scale(1.05)"
            }
        }}>
            <CardActionArea>

                <CardMedia
                    component="img"
                    image="https://via.placeholder.com/1000x200"
                    height="200"
                    alt="descripcion"
                >
                </CardMedia>
                <CardContent>
                    <Typography variant="h5">Card Title</Typography>
                    <Typography component="p" variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore. Impedit quam maiores recusandae obcaecati sit, perspiciatis eos dolorem tempora, maxime nostrum numquam dolores quos non doloremque odit dolore. Quidem.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained">Add</Button>
                <Button color="error">Remove</Button>
            </CardActions>
        </Card>
    );
}

export default Cards;