import { Box, Slide } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {AiFillGithub} from "react-icons"
import "./Sidebar.css";
import { details } from '../../details';

const Sidebar = () => {
    const [checked,setChecked]= useState(false);
    const introLoaded=()=>{
        setTimeout(()=>{
            setChecked(true);
    
        },900)
    }
        useEffect(()=>{
            introLoaded();
        },[])
  return (

    <Slide direction='up'  in={checked}>


        <Box sx={{position:"fixed",bottom:"5%",left:"4%",display:"grid",justifyContent:"center",alignContent:"center",gap:"15px"}}>
            <a id="contact-github" className='socialLogo' target={"_blank"} href={details.githubLink} style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i className="fa-brands fa-github"></i></a>
            <a  id="contact-linkedin" className='socialLogo' target={"_blank"} href={details.linkedInLink} style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i className="fa-brands fa-linkedin"></i></a>
            <a id="contact-phone" className='socialLogo' target={"_blank"} href={details.instagramLink} style={{textDecoration:"none",color:"white",fontSize:"1.7rem"}}><i className="fa-solid fa-phone"></i></a>
            <a id="contact-email" className='socialLogo' target={"_blank"} href={details.mailLink} style={{textDecoration:"none",color:"white",fontSize:"1.5rem"}}><i className="fa-regular fa-envelope"></i></a>
            
        </Box>
        
    </Slide>
  )
}

export default Sidebar