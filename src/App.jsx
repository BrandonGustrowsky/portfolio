import { useState } from 'react'
import './App.css'

import { AppBar, Toolbar, IconButton, Typography, Tooltip, Paper, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (
    <>
      <AppBar id="navbar" position="sticky">
        <Toolbar style={{ display: "flex", gap: "15px", margin: 0, justifyContent: "center" }}>
          <Tooltip title="https://www.linkedin.com/in/brandon-gustrowsky/" arrow>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              href="https://www.linkedin.com/in/brandon-gustrowsky/"
            >
              <LinkedInIcon
                className="icon" />
            </IconButton>
          </Tooltip>
          <Tooltip title="https://github.com/BrandonGustrowsky" arrow>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              href="https://github.com/BrandonGustrowsky"
            >
              <GitHubIcon
                className="icon" />
            </IconButton>
          </Tooltip>
          <Tooltip title="bgustrowsky@southern.edu" arrow>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              href="mailto:bgustrowsky@southern.edu"
            >
              <EmailIcon
                className="icon" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <header>
        {/* Image src: https://www.smh.com.au/opinion/my-experience-of-the-harassment-thats-been-missing-from-the-metoo-debate-20180112-h0h5kd.html */}
        <div>
          <img src="./src/assets/banner.jpg" alt="Man typing on keyboard, website banner" id="splashImg" />
          <div className="bannerGradient"></div>
        </div>
        <section style={{ display: "flex", justifyContent: "space-between", margin: "0 5%", zIndex: 4, position: "absolute", top: "150px", alignItems: "center" }}>
          <Typography className="profileText">Brandon Gustrowsky</Typography>
          <img src="./src/assets/brandon-linkedin.jpg" alt="Brandon Gustrowsky's profile picture, standing outside in suit and tie" id="profileImg" />
        </section>
      </header>
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Paper className="bannerTextLayout">
          <Typography variant="h2" style={{fontWeight: "500"}}>About</Typography>
          <hr />
          <Typography variant="article" className="profileMessage">A diligent junior Computer Science student with strong problem solving and communication
            skills exemplified through placing first in the 2022 national SkillsUSA Web Design and Development Competition in Atlanta, Georgia. Possesses strong
            teamwork and leadership qualities shown through previous internship experience. Currently tackling interest in machine learning by taking online courses
            through Coursera and willfully enrolled in a calculus based statistics course at Southern Adventist University.</Typography>
        </Paper>
        <hr />
        <Typography variant="h3" className="sectionTitle">Projects</Typography>
        <section className="sectionLayout">
          <Paper elevation={8} className="card">
            {/* Image source: http://www.alltechflix.com/benefits-computer-programmer/ */}
            <img src="./src/assets/binarySearchTree.jpg" alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ height: "270px", width: "100%", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>Huffman Encoding</Typography>
            <div style={{ margin: "10px" }}>
              <Typography variant="p" style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>This project reads in a text file from the command line and converts its contents to
                one large string after removing all non-alphabetic characters. It nicely prints the number of times each letter
                occurs in the file and constructs a Huffman tree based on the frequency of those values. A Huffman encoding
                for each letter is derived from the tree followed by the fixed-width and variable-width Huffman encodings.
              </Typography>
            </div>
            <Typography className="language">C++</Typography>
          </Paper>
          <Paper elevation={8} className="card">
            {/* Image Source: https://coursedown.com/network-concepts-and-programming-from-scratch/ */}
            <img src="./src/assets/EditDistance.jpg" alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>Edit Distance</Typography>
            <div style={{ margin: "10px" }}>
              <Typography variant="p" style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>
                Given two strings, this program uses dynamic programming techniques to calculate the minimal number of edits needed to
                convert the first string into the second. In addition, it generates an edit string, which tells the user where
                a given modification to the first string took place.
              </Typography>
            </div>
            <Typography className="language">C++</Typography>
          </Paper>
          <Paper elevation={8} className="card">
            {/* Image Source: https://www.moneycrashers.com/best-credit-cards-online-shopping/ */}
            <img src="./src/assets/ebayDesktop.jpg" alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>eBay Desktop App</Typography>
            <div style={{ margin: "10px" }}>
              <Typography variant="p" style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>
                Users can create an account based on the university they attend, view recently added products, search for products, and perform basic CRUD operations assuming they are
                authorized to do so. Data is stored in json files with multiple custom query functions accessing and modifying the data directly.
              </Typography>
            </div>
            <Typography className="language">PyQt5, Python</Typography>
          </Paper>
          <Paper elevation={8} className="card">
            {/* Image source: https://iceland-photo-tours.com/articles/camera-and-gear-reviews/beginner-s-guide-to-types-of-cameras-for-photography */}
            <img src="./src/assets/videostarPicture.jpg" alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>Video Star</Typography>
            <div style={{ margin: "10px" }}>
              <Typography variant="p" style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>
                A video sharing platform where users can view a variety of short videos fetched from a third party API. Videos may be either free or priced where free videos can be
                favorited and watched, while priced videos are blurred and can be added to a cart where they can be purchased or removed. Purchased videos assume the same functionality
                as free videos.
              </Typography>
            </div>
            <Typography className="language">React, JavaScript, MaterialUI</Typography>
          </Paper>
        </section>
        <hr />
        <Typography variant="h4" className="sectionTitle">Professional</Typography>
        <section className="sectionLayout">
        <Paper elevation={8} className="card">
            {/* Image Source: https://execed.kelley.iu.edu/have-a-project-manager-mindset/ */}
            <img src="./src/assets/sharehimImg.jpg" alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>ShareHim Content Authoring</Typography>
            <div style={{ margin: "10px" }}>
              <Typography variant="p" style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>
                A hierarchicaly structured project management website. An authenticated and authorized user with no special 
                permissions may view projects and presentations they have been added to contribute to them, as well as forums.
                Other roles include, but not limited to, presentation manager, project manager, and administrator.
              </Typography>
            </div>
            <Typography className="language">PHP, Yii2, HTML, CSS, Ajax, JQuery</Typography>
          </Paper>
        </section>
      </main>
    </>
  )
}

export default App
