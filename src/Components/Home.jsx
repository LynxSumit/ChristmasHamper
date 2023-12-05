import { Box, Button, Container } from '@mui/joy'
import React from 'react'
import ChristmastVideo from "../assets/christmas.mp4"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <Box sx={{margin : 0, display : 'flex', justifyContent : 'flex-start', alignItems : 'center', height : '100vh', flexDirection : 'column'}}>

    <Box sx={{position : 'relative', width : '100%', height : '100%', overflow : 'hidden' }}>
    <video  
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay src={ChristmastVideo} />

    
      
    </Box>
    <Box sx={{position : 'absolute', inset : 0, display : 'flex', flexDirection: 'column', justifyContent : 'center', alignItems : 'center', fontStyle :'Mountains of Christmas , serif', fontSize : 30,  }}>
    <button className='button' onClick={() => navigate("/create-hamper")}>Create Your Custom Hamper</button>
    </Box>
    </Box>
  )
}

export default Home
