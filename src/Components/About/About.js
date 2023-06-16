import { Box, Button,  Typography, Zoom } from "@mui/material";
import React, {  useState } from "react";
import thisiskmv from "../../media/thisiskmv.png"
import LinearDeterminate from "../MiniComponent/ProgressComp";
import "./About.css";

const About = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  window.addEventListener("scroll", () => {
    setScrolled(document.documentElement.scrollTop);
  });

  if (scrolled >= 56) {
    setTimeout(() => {
      setChecked1(true);
    }, 600);
    setTimeout(() => {
      setChecked2(true);
    }, 800);
  }
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1tqO6N7mu2UwSY8CxzUEoCThGq8uA49Fv/view?usp=sharing"
    );
  };

  return (
    <Box
    id="about" className="about section"
      sx={{
        width: "80%",
        margin: "10% auto",
        padding: "0% 10px",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "25px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Zoom in={checked1}>
          <Typography
            className="aboutHeading"
            variant="h4"
            sx={{
              color: "rgb(191,201,232)",
            //   backgroundColor: "rgb(11,24,47)",
              position: "absolute",
              top: "-25px",
              padding: "0% 5% 0% 0%",
            }}
          >
            About Me
          </Typography>
        </Zoom>
        <Zoom in={checked2}>
          <Typography
            className="aboutText"
            sx={{ marginTop: "8%", color: "rgb(136,146,176)" }}
          >
            Hello! My name is
            <span style={{ color: "white" }}> Kamal Verma</span> and I enjoy
            creating things that live on the internet. My interest in computers
            and technology started back in when I was in my 6th grade and my
            father brought me a computer and after that day i kept doing lot of
            new things on that.
            <br />
            <br />
            After my graduation i was finding something to start my carrer in
            tech field and gratefully i came into know about{" "}
            <span style={{ color: "white" }}>Web Development</span> and started
            my journey from there. Fast-forward to today, and I’ve worked in
            many projects with lot of tech stacks.My main focus these days is
            building accessible, inclusive products.
          </Typography>
        </Zoom>
        <Box marginTop="1.5rem" onClick={openResume}>
          <Button variant="outlined"
          id="resume-button-2"
            sx={{
              // border: "1px solid #64ffda",
              
              border: "1px solid black",
              boxShadow:"0 0 10px green",
              color: "white",
              fontSize: "0.8rem",
            }}>Resume</Button>
          <LinearDeterminate color={"transparent"}/>
        </Box>
      </Box>
      <Zoom in={checked2}>
        <Box
          className="imageContainer"
          sx={{ display: "grid", justifyContent: "right" }}
        >
          <img
          className="home-img"
            // className="profileImage"
            style={{ display: "block", margin: "auto", borderRadius: "5px" }}
            width={"40%"}
            src={thisiskmv}
          />
        </Box>
       
      </Zoom>
      <div id="About"></div>
    </Box>
    // 151951
  );
};

export default About;
