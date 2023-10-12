import React from 'react';
import { Typography, Box } from '@mui/material';
// Image imports
// import bannerImg from './assets/banner.jpg'
import Project from './components/project/Project';
import { PROFESSIONAL_DATA, PROJECT_DATA } from './common/data/data';
import Professional from './components/professional/Professional';
import Navbar from './components/navbar/Navbar';
import styles from "./App.module.scss";

function App() {
    return (
        <>
            <Navbar />
            <header id={styles["header"]}>
                {/* Image src: https://www.smh.com.au/opinion/my-experience-of-the-harassment-thats-been-missing-from-the-metoo-debate-20180112-h0h5kd.html */}
                {/* <div> */}
                {/* <img src={ bannerImg } alt="Man typing on keyboard, website banner" id="splashImg" /> */}
                {/* <div className="bannerGradient"></div> */}
                {/* </div> */}
                <section id={styles["bannerInformation"]}>
                    <Box className={styles["text-container"]}>
                        <Typography className={styles["profileText"]}>Brandon Gustrowsky</Typography>
                        <Box className={styles["description-container"]}>
                            <Typography variant="article" className={styles["profileMessage"]} sx={{ textAlign: "justify", wordWrap: "wrap" }}>
                                Hello! As a senior Computer Science student, I value both the soft and hard skills that make a top notch software
                                engineer. Currently, I am involved in a Generative AI research project with a classmate and professor, and for the
                                past two years I have been fortunate enough to place first in the nation in both the 2022 and 2023 Web Design
                                and Development competitions through SkillsUSA. In addition to my passion for software, I strive to maintain a
                                daily fitness routine that includes both cardiovascular exercises and gym workouts, all while continuously
                                enriching my knowledge through podcasts.
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box id={styles["profile-img"]} />
                    </Box>
                </section>
            </header>
            <main className={styles["main"]} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <hr />
                <Typography variant="h3" className="sectionTitle">Projects</Typography>
                <section className={styles["section-layout"]}>
                    {
                        PROJECT_DATA.map((project, index) => {
                            return <Project
                                key={index}
                                name={project.name}
                                description={project.description}
                                link={project.link}
                                altText={project.altText}
                                isPrivate={project.isPrivate}
                                languages={project.languages}
                            />
                        })
                    }
                </section>
                <hr />
                <Typography variant="h4" className="sectionTitle">Professional</Typography>
                <section className={styles["section-layout"]}>
                    {PROFESSIONAL_DATA.map((professional, index) => {
                        return <Professional
                            key={index}
                            company={professional.company}
                            name={professional.name}
                            description={professional.description}
                            link={professional.link}
                            altText={professional.altText}
                            languages={professional.languages}
                        />
                    })}
                </section>
            </main>
        </>
    )
}

export default App
