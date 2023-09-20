import { Box, Tooltip, Typography } from "@mui/material";
import styles from "./Professional.module.scss"

const Professional = (props) => {
    const { company, name, description, altText, languages } = props;
    return (
        <Box elevation={8} className={styles["card"]}>
            {/* Image Source: https://execed.kelley.iu.edu/have-a-project-manager-mindset/ */}
            {/* <img src={""} alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} /> */}
            <Box className={styles["header-container"]}>
                <Typography variant="h1" className={styles["title"]}>{name}</Typography>
                <Tooltip title="https://www.southern.edu/" arrow placement="top">
                    <Typography variant="h2" className={styles["company"]}>{company}</Typography>
                </Tooltip>
            </Box>
            <Box>
                <Typography variant="p" className={styles["description"]}>{description}</Typography>
            </Box>
            <Box className={styles["footer"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                <Typography className={styles["languages-container"]}>{languages.map((language, index) => {
                    return <p className={styles["language"]}>{`${language}${index < languages.length - 1 ? ", " : ""}`}</p>
                })}</Typography>
            </Box>
        </Box>
    )
};

export default Professional;