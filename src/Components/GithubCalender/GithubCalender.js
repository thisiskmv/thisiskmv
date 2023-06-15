import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <>
        <Typography className='contactheading' sx={{textAlign:"center",fontWeight:"600",color:"rgb(204,214,246)",marginBottom:"2%"}} variant='h2' >My Contributions</Typography>
    <Box sx={{textAlign:"center",width:"fit-content",margin:"auto auto 10% auto",color:"white",borderRadius:"8px",padding:"3% 1%",border:"2px solid white"}}>
      <GitHubCalendar 
      className="react-activity-calendar"    
          color="skyblue"
          username="thisiskmv" />
      </Box>
      </>
  );
}