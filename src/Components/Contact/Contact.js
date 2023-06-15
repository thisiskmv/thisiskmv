import { Box, Button, Typography, Zoom } from '@mui/material'
import React, { useState } from 'react'
import {details} from "../../details"
import "./Contact.css"

const Contact = () => {
    const [checked1,setChecked1]= useState(false);
    
    const [scrolled,setScrolled]= useState(0);
    
    window.addEventListener("scroll",()=>{
        setScrolled(document.documentElement.scrollTop);
    })
  
    if(scrolled>=2700){
        
        setTimeout(()=>{
            setChecked1(true)
        },500) 
    }



    const mailTo=()=>{
        window.open("mailto:ranaankitr@outlook.com","_blank");
    }
  return (
    <Zoom className='contactDiv' in={checked1}>

    <Box  id="contact" sx={{width:"80%",margin:"10% auto",padding:"0% 10px"}}>
        
        <Typography className='contactheading' sx={{textAlign:"center",fontWeight:"600",color:"rgb(204,214,246)"}} variant='h2'>Get In Touch</Typography>
        <Typography className='contactSubHeading' sx={{textAlign:"center",width:"70%",margin:"auto",color:"rgb(124,134,164)"}} variant='h5'>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Typography>
        
        <Button className='contactButton' onClick={mailTo} variant="outlined" sx={{border: "1px solid black",boxShadow:"0 0 10px green",color: "white",fontSize: "0.9rem",margin:"auto",padding:"1% 3%",display:"block",marginTop:"2%"}}>Say Hello</Button>
        <Box sx={{marginTop:"2%",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",gap:"15px"}}>
            <a  id="contact-github" className='socialLogo' target={"_blank"} href={details.githubLink} style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i className="fa-brands fa-github"></i></a>
            <a  id="contact-linkedin" className='socialLogo' target={"_blank"} href={details.linkedInLink} style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i className="fa-brands fa-linkedin"></i></a>
            <a id="contact-phone" className='socialLogo' target={"_blank"} href={details.instagramLink} style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i className="fa-solid fa-phone"></i></a>
            <a id="contact-email" className='socialLogo' target={"_blank"} href={details.mailLink} style={{textDecoration:"none",color:"white",fontSize:"1.5rem"}}><i className="fa-regular fa-envelope"></i></a>
        </Box>
        
    </Box>
    </Zoom>
  )
}

export default Contact