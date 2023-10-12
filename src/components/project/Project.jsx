import React from 'react';
import { Box } from "@mui/material";
import binarySearchTreeImg from '../../assets/binarySearchTree.jpg'
import { IconButton, Typography, Tooltip } from '@mui/material';
import styles from "./Project.module.scss";

import GitHubIcon from '@mui/icons-material/GitHub';

const Project = (props) => {
    const { name, description, link, altText, isPrivate, languages } = props
    return (
        <Box className={styles.card} onClick={() => { !isPrivate ? window.open(link) : null }}>
            {/* Image source: http://www.alltechflix.com/benefits-computer-programmer/ */}
            {/* <img src={binarySearchTreeImg} alt={altText} style={{ height: "270px", width: "100%", borderRadius: "5px" }} /> */}
            <Typography variant="p" className={styles["title"]}>{name}</Typography>
            <Typography variant="p" className={styles["description"]}>
                {description}
            </Typography>
            <Box className={styles["footer"]}>
                <Box className={styles["tech-stack"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                    <Typography className={styles["languages-container"]}>
                        {languages.map((language, index) => {
                            return <p className={styles["language"]}>{`${language}${index < languages.length - 1 ? "," : ""}`}</p>
                        })}
                    </Typography>
                </Box>
                <Tooltip title={!isPrivate ? link : "Private Repository"} arrow>
                    <IconButton className={styles["github-btn"]}>
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
};

export default Project;