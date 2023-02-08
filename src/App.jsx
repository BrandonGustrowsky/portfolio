import { useState } from 'react'
import './App.css'

import { AppBar, Toolbar, IconButton, Typography, Tooltip, Paper, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

// Image imports
// import bannerImg from './assets/banner.jpg'
import binarySearchTreeImg from './assets/binarySearchTree.jpg'
import brandonLinkedinImg from './assets/brandon-linkedin.jpg'
import ebayDesktopImg from './assets/ebayDesktop.jpg'
import editDistanceImg from './assets/editDistance.jpg'
import gameBasedLearningImg from './assets/gameBasedLearningPhoto.jpg'
import shareHimImg from './assets/sharehimImg.jpg'
import videostarImg from './assets/videostarPicture.jpg'

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
      <header id="header">
        {/* Image src: https://www.smh.com.au/opinion/my-experience-of-the-harassment-thats-been-missing-from-the-metoo-debate-20180112-h0h5kd.html */}
        {/* <div> */}
        {/* <img src={ bannerImg } alt="Man typing on keyboard, website banner" id="splashImg" /> */}
        {/* <div className="bannerGradient"></div> */}
        {/* </div> */}
        <section id="bannerInformation" style={{display: "flex", gap: "50%"}}>
          <div>
            <Typography className="profileText">Brandon Gustrowsky</Typography>
            <Typography variant="article" className="profileMessage" sx={{textAlign: "justify", wordWrap: "wrap"}}>
              Hello! A little bit about me, my hobbies include running, swimming, pickleball, working out at the gym,
              and technology. While my main emphasis in tech is web development, I am working my way into the fields
              of AI and ML through online courses. From all available evidence the future is AI, and I want to be a
              part of it. View my projects below :)
            </Typography>
          </div>
          <img src={brandonLinkedinImg} alt="Brandon Gustrowsky's profile picture, standing outside in suit and tie" id="profileImg" />
        </section>
      </header>
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* <Paper className="bannerTextLayout">
          <Typography variant="h2" style={{ fontWeight: "500" }}>About</Typography>
          <hr />

        </Paper> */}
        <hr />
        <Typography variant="h3" className="sectionTitle">Projects</Typography>
        <section className="sectionLayout">
          <Paper elevation={8} className="card" onClick={ () => {window.location.href = "https://github.com/BrandonGustrowsky/Huffman-Encoding"}}>
            {/* Image source: http://www.alltechflix.com/benefits-computer-programmer/ */}
            <img src={binarySearchTreeImg} alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ height: "270px", width: "100%", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)", marginTop: "10px" }}>Huffman Encoding</Typography>
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
            <img src={editDistanceImg} alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)", marginTop: "10px" }}>Edit Distance</Typography>
            <div style={{ margin: "10px" }}>
              <Typography variant="p" style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>
                Given two strings, this program uses dynamic programming techniques to calculate the minimal number of edits needed to
                convert the first string into the second. In addition, it generates an edit string, which tells the user where
                a given modification to the first string took place.
              </Typography>
            </div>
            <Typography className="language">Java</Typography>
          </Paper>
          <Paper elevation={8} className="card">
            {/* Image Source: https://www.moneycrashers.com/best-credit-cards-online-shopping/ */}
            <img src={ebayDesktopImg} alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)", marginTop: "10px" }}>eBay Desktop App</Typography>
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
            <img src={videostarImg} alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)", marginTop: "10px" }}>VideoStar</Typography>
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
            <img src={shareHimImg} alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)", marginTop: "10px" }}>ShareHim Content Authoring</Typography>
            <div style={{ margin: "10px" }}>
              <Typography variant="p" style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>
                A hierarchicaly structured project management website. An authenticated and authorized user with no special
                permissions may view projects and presentations they have been added to contribute to them, as well as forums.
                Other roles include, but not limited to, presentation manager, project manager, and administrator.
              </Typography>
            </div>
            <Typography className="language">PHP, Yii2, HTML, CSS, Ajax, JQuery</Typography>
          </Paper>
          <Paper elevation={8} className="card">
            {/* Image Source: https://www.salesscreen.com/lp/sales-gamification-software/?campaignid=674481057&adgroupid=1168782040420013&network=o&device=c&_bt=&_bk=gamification&_bm=e&msclkid=a9e41601e94814d40e1875e0a64d05dd&utm_source=bing&utm_medium=cpc&utm_campaign=SEARCH%20%E2%88%92%20GLOBAL%20%E2%88%92%20Gamification%20%E2%88%92%20SMKAG&utm_term=gamification&utm_content=kw%20-%20gamification */}
            <img src={gameBasedLearningImg} alt="A graphic of a binary tree, intended to represent a binary search tree." style={{ width: "100%", height: "270px", borderRadius: "5px" }} />
            <Typography variant="h1" style={{ fontSize: "35px", textAlign: "center", textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)", marginTop: "10px" }}>Game Based Learning System</Typography>
            <div style={{ margin: "10px" }}>
              <Typography variant="p" style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)" }}>
                A web app built educators to use to assist in student learning using the adventure/task/reward based game structure.
                Game Based Learning implements a hierarchical user structure and implements RBAC. Specifically, I developed business
                frontend and backend logic for Organizations, Courses, Course Sections, and wrote several dozen tests.
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
