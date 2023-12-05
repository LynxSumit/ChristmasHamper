import { Box, Button, FormControl, FormLabel, Grid, Input, Typography, RadioGroup , Radio, ButtonGroup } from '@mui/joy'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const {register , handleSubmit , formState : {errors}} = useForm()
  const [method, setMethod] = useState("creditCard");
  const navigate = useNavigate()
  const submitHandler = (data) => {
    console.log(data)
  }
  return (
    <>
    <Navbar/>
  <Box sx={{width : '50%', height : '100vh', padding : '1vmax', backgroundColor : 'whitesmoke' }}>
      <Grid container
    sx={{ mx: 0 }}
    spacing={3}
  component={"form"}

onSubmit={handleSubmit(submitHandler)}
     >
     <Grid xs={12}>

<Typography> 01. Personal Details</Typography>
     </Grid>
<Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>
                  First Name
                </FormLabel>
                <Input
                size="lg"
                
                  
                  {...register("firstName", { required: true })}
                  color={errors.firstName ? "danger" : "neutral"}
                  autoFocus
                  placeholder="John"
                  fullWidth={false}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                size="lg"
                  {...register("lastName", { required: true })}
                  color={errors.lastName ? "danger" : "neutral"}

                  autoFocus
                  placeholder="Doe"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                size="lg"
                 
                  {...register("email", { required: true })}
                  color={errors.email ? "danger" : "neutral"}

                  autoFocus
                  placeholder="johndoe@gmail.com"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>

            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>PhoneNumber</FormLabel>
                <Input
                size="lg"
                  
                  {...register("phone", { required: true })}
                  color={errors.phone ? "danger" : "neutral"}

                  autoFocus
                  placeholder="9945209453"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>

<Typography> 02. Shipping Details</Typography>
     </Grid>
            <Grid xs={12}>
              <FormControl>
                <FormLabel>Street Address</FormLabel>
                <Input
                size="lg"
                  
                  {...register("address", { required: true })}
                  color={errors.address ? "danger" : "neutral"}

                  autoFocus
                  placeholder="lorem ipsum dolor sit amet, consectetur adip"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={4}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input
                size="lg"
                 
                  {...register("city", { required: true })}
                  color={errors.city ? "danger" : "neutral"}

                  autoFocus
                  placeholder="Los Angeles"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={4}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input
                size="lg"
                 
                  {...register("country", { required: true })}
                  color={errors.country ? "danger" : "neutral"}

                  autoFocus
                  placeholder="United States"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={4}>
              <FormControl>
                <FormLabel>Zip Code</FormLabel>
                <Input
                size="lg"
                 
                  {...register("zipCode", { required: true })}
                  color={errors.zipCode ? "danger" : "neutral"}

                  autoFocus
                  placeholder="123456"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
           
            <Grid xs={6} marginTop={4} mx={"auto"}  >

          
              <Button type='button' onClick={() => navigate("/create-hamper")} fullWidth className='button'>Back</Button>
          
            </Grid>
            <Grid xs={6} marginTop={4} mx={"auto"}   >

          
          
              <Button type='submit' fullWidth className='button'>Confirm Order</Button>

          
            </Grid>
    
    </Grid>
  </Box>
    </>
  )
}

export default Checkout
