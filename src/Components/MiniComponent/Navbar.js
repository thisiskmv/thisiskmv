import { Box,  Button,  Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinearDeterminate from "./ProgressComp";
import logo from "../../media/logo.png";
import "./Navbar.css";
import { details } from "../../details";
import Scroll from "react-scroll-to-element";


const Navbar = ({scollHandle}) => {
    const [checked,setChecked]= useState(false);
  const [hoverEffect, SetHoverEffect] = useState(0);
  const [scrolled, setScrolled] = useState(0);

  const introLoaded=()=>{
    setTimeout(()=>{
        setChecked(true);

    },600)
}
    useEffect(()=>{
        introLoaded();
    },[])

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1tqO6N7mu2UwSY8CxzUEoCThGq8uA49Fv/view?usp=sharing"
    );
  };

  window.addEventListener("scroll", () => {
    setScrolled(document.documentElement.scrollHeight);
  });

  
  return (
    <Box 
      id="nav-menu"
      className={scrolled >= 100 ? "navbarboxShadow" : ""}
      sx={{
        display: "flex",
        justifiyContent: "space-between",
        width: "100%",
        padding: "5px 1%",
        position: "sticky",
        top: "0%",
        zIndex:"10"
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0% 25px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "white",
        }}
      >
        {/* <img className="logoImage" height={"70px"} width={"75px"} src={logo} /> */}
        
      </Box>
      <Box  className="logoBox" sx={{ display: "none" }}>
        <img height={"70px"} width={"75px"} src={logo} />
      </Box>
      <Box
        className="navbar-part-2"
        sx={{
          display: "flex",
          width: "80%",
          color: "white",
          padding: "15px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {
            details.navList.map((ele,index)=>{
                return (
                <Scroll offset={-150} type="class" element={details.className[index]}>
                <Slide key={index} direction="down" in={checked}>

                <Box
                sx={{ cursor: "pointer" }}
                onMouseOut={() => {
                    SetHoverEffect(0);
                  }}
                  onMouseOver={() => SetHoverEffect(index+1)}
                    >
                <Typography className={ele?.val2} variant="h5" sx={{fontSize:"1.1rem" }}>{ele.val1}</Typography>
                {hoverEffect == index+1 ? (
                    <LinearDeterminate color={"white"} />
                    ) : (
                      <Box sx={{ height: "4px" }}></Box>
                      )}
                </Box>
            </Slide>
                </Scroll>)
            })
        }

       
        <Box onClick={openResume}>
          <Button variant="outlined"
           id="resume-button-1"
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
    </Box>
  );
};

export default Navbar;
