import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const NavListDrawer = ({ navLinks }) => {
    return (
        <Box sx={{ width: 250 }}>
            {/* <nav>
                <List>
                      <ListItem>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                      </ListItem>
                </List>
            </nav>
            <Divider /> */}
            <nav>
                <List>
                    {
                        navLinks.map(item => (
                            <ListItem disablePadding key={item.title}>
                                <ListItemButton component="a" href={item.title}>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
    );
}

export default NavListDrawer;