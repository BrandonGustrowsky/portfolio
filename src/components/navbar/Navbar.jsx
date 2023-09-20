import { AppBar, Toolbar } from "@mui/material";
import styles from "./Navbar.module.scss";
import NavbarButton from "../navbar_button/NavbarButton";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
    
    return (
        <AppBar id={styles.navbar} position="sticky">
            <Toolbar style={{ display: "flex", gap: "15px", margin: 0, justifyContent: "center" }}>
                <NavbarButton link="https://www.linkedin.com/in/brandon-gustrowsky/" >
                    <LinkedInIcon id="icon" />
                </NavbarButton>
                <NavbarButton link="https://github.com/BrandonGustrowsky">
                    <GitHubIcon id="icon" />
                </NavbarButton>
                <NavbarButton link="mailto:bgustrowsky@southern.edu" isEmail={true}>
                    <EmailIcon id="icon" />
                </NavbarButton>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;