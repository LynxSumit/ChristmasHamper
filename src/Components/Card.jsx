/* eslint-disable react/prop-types */
import { AspectRatio,  Button, Card, CardOverflow } from "@mui/joy";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import { Add } from "@mui/icons-material";

import { useEffect,  } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, } from "../Reducers/CartSlice";


export default function CARD({ img, title, price , item}) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);

 
const addToCart = () =>{

dispatch(AddToCart({value : item}))
  toast.success("Item Added to Gift Hamper", {pauseOnHover : false, theme : 'colored', autoClose: 2000, style : {color : '#B31312', backgroundColor: '#fff'},})
}

useEffect(() => {
  
console.log(data)
}, [data]);

  return (
    <>
    <Card sx={{ minHeight: "280px", width: "auto", boxShadow : '2px', filter : 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))', }}>

  
    <CardOverflow>
      <AspectRatio minHeight={300} maxHeight={400} sx={{height : '100%', boxShadow : '0px 1px 1px 0px rgba(0, 0, 0, 0.25)'}}>
      
        <img
          style={{ height: "100%"}}
          src={img}
          srcSet=""
          loading="lazy"
          alt=""
        />
        

      </AspectRatio>
  

      
      </CardOverflow>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
         
        }}
      >
    


        <Typography level="title-lg" sx={{margin : '.5vmax'}} textColor="#000">
          {title}
        </Typography>

       
        <Button variant="soft"   color="danger"  sx={{borderRadius : 0, cursor  :'default'}} >Price : {price}</Button>
        <Button onClick={addToCart} sx={{ mx : 'auto', fontSize : 26, background : '#860A35', color : '#fff', cursor : 'pointer', mt : 2, ":hover" : {background : '#B31312'}}}>
<Add />

        </Button>
      </CardContent>
    </Card>
   
   
    </>
  );
}
