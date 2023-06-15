
import { Box, ListItem, Typography, Zoom } from '@mui/material'
import React, { useState } from 'react'
import { details } from '../../details'
import "./Skill.css"

const Skill = () => {
  const [checked1,setChecked1]= useState(false);
  const [checked2,setChecked2]= useState(false);
  const [scrolled,setScrolled]= useState(0);
  
  window.addEventListener("scroll",()=>{
      setScrolled(document.documentElement.scrollTop);
  })

  if(scrolled>=758){
      setTimeout(()=>{
          setChecked2(true)
      },600) 
      setTimeout(()=>{
          setChecked1(true)
      },800) 
  }

  return (
    <Box id="skills" sx={{width:"80%",margin:"15% auto",padding:"0% 10px"}}>
        <Box sx={{position:"relative"}} >
          <Zoom in={checked2}>

          <Typography className='skillHeading' variant='h4' sx={{color:"rgb(191,201,232)",position:"absolute",top:"-4rem",left:"41%",padding:"0% 5% 0% 5%"}} >Skills</Typography>
          </Zoom>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginTop:"5%",flexWrap:"wrap",rowGap:"5px"}}>
              {
                details.techStack.map((ele,index)=>{
                  return(

                      <ListItem className='skillContainer' key={index} style={{display:"block",width:"25%"}}>
                            <Zoom  in={checked1}>
                              <Box className="skills-card" >
                                <img className="skills-card-img"  width={"45%"} style={{margin:"auto",display:"block"}} src={ele.img}/>
                                <Typography className="skills-card-name" sx={{textAlign:"center",color:"white"}}>{ele.name}</Typography>
                              </Box>
                            </Zoom>
                      </ListItem>
                  )
                })
              }
        </Box>
    </Box>
  )
}

export default Skill