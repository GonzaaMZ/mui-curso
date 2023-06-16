import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
    {
        title: "Home", path: "#"
    },
    {
        title: "Login", path: "#"
    },
    {
        title: "Register", path: "#"
    },
]

const Navbar = () => {

    const [open, setOpen] = useState(false);


    return ( 
        <>

            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    color="inherit"
                    size="large"
                    onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow: 1}}>News</Typography>
                    {navLinks.map(item => (
                        <Button 
                        color="inherit" 
                        key={item.title}
                        component="a"
                        href={item.path}
                        >{item.title}</Button>                        
                    ))}
                </Toolbar>
            </AppBar>
        
            <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
             <NavListDrawer navLinks={navLinks} /> 
            </Drawer>
        </>
     );
}
 
export default Navbar;