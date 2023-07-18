import Mycontext from "@/Context/myContext";
import {
  Container,
  Divider,
  Typography,
  Button,
 Alert,
  Box,
  Badge,
  List,
  Grid ,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from "@mui/material";
import React, { useContext, useState } from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import Link from "next/link";

const cart = () => {
  const context = useContext(Mycontext);
  const[Error , SetError] = useState('')
  const router = useRouter()
  const totalItems = context.addCart.length;
  const openCheckout = () => {
    if(context.addCart.length === 0 ){
      SetError("Your cart is empty")
    }else{
      router.push("/Checkout")
    }
   
  };
  const removeFromCart =(itemId)=>{
    context.setAddCart((prevItems) =>
    prevItems.filter((item) => item.id !== itemId)
  );
  
  }
  setTimeout(() => {
    SetError(null)
  }, 5000);
  return (
    <>
      <Navbar/>   
      {" "}
      <Container>  
      {Error && <Alert severity="error">{Error}</Alert>}
        <Box sx={{ minHeight: "100vh",}}>
        <Box sx={{ display: "flex", width: 450 }}>
        <Typography sx={{ flexGrow: 1, my: 1, px: 2 }} variant="h5">
          Shopping Cart
          <Badge sx={{ mx: 2 }} badgeContent={totalItems} color="primary">
            <ShoppingCartSharpIcon />
          </Badge>
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ my: 2 }}>
        {context.addCart.length === 0 ? (
          <Typography
            sx={{ my: 3, textAlign: "center" }}
            variant="h5"
            fontWeight={"bold"}
          >
            Your cart is empty
          </Typography>
        ) : (
          context.addCart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card sx={{  display: "flex" }} variant="outlined">
                <CardMedia
                  component="img"
                  sx={{ height: 100, width: "auto" }}
                  image={item.image}
                />

                <CardContent sx={{ flexGrow: 1}}>
                  <Typography>{item.title}</Typography>
                  <Typography>$ {item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Box>
      <Container sx={{ position: "absolute", bottom: 0, mb: 5 }}>
        <Divider />
        <List sx={{ display: "flex" }}>
          <Typography sx={{ flexGrow: 1 }}>Subtotal</Typography>
          <Typography>
            {
              context.addCart.reduce(
                (value, newValue) => {
                  value.price += newValue.price;
                  return value;
                },
                { price: 0 }
              ).price
            }
          </Typography>
        </List>
        <Typography sx={{ my: 2 }}>
          Shopping and taxes calculated at checkout
        </Typography>

        <Button
          variant="contained"
          fullWidth
          className="text-white bg-slate-900 hover:bg-slate-800"
          sx={{ backgroundColor: "#37474f", my: 2 }}
          onClick={openCheckout}
        >
          Checkout
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          <Link href="/">Continue shopping</Link>
        </Typography>
      </Container>
        </Box>
       
      </Container>
    
      <Footer/>
    </>
  );
};

export default cart;
