import React from 'react';
import { IconButton, Tooltip } from "@mui/material";
import styles from "./NavbarButton.scss";

const NavbarButton = (props) => {
    const { link, children } = props;
    return (
        <Tooltip title={link} arrow>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                href={link}
            >
                {children}
            </IconButton>
        </Tooltip>
    )
};

export default NavbarButton;