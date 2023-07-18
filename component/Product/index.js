import React, { useState, useContext } from "react";
import Navbar from "../Navbar";
import {
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Button,
  Rating,
  Divider,
  Drawer,
  Box,
  Badge,
} from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../Footer";
import MyContext from "../../Context/myContext";
import { useRouter } from "next/router";
import Link from "next/link";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(MyContext);

  const router = useRouter();
  const totalItems = context.addCart.length;

  const AddToCart = (product) => {
    context.CartData(product);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const removeFromCart = (itemId) => {
    context.setAddCart((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const openCheckout = (e) => {
    e.preventDefault();
    router.push("/cart");
  };
  const handelClick = (productId) => {
    router.push(`/Product/${productId}`);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ minHeight: "100vh" }}>
        <Grid container spacing={2} sx={{ my: 3 }}>
          {context.products.map((product) => {
            const { id, image, title, price, rating } = product;
            return (
              <Grid key={id} item xs={3}>
                <Card
                  sx={{ maxWidth: 350, height: 300 }}
                  variant="outlined"
                  onClick={() => handelClick(product.id)}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 100, mx: "auto", width: "auto" }}
                    image={image}
                  />
                  <CardContent>
                    <Typography>{title}</Typography>
                  </CardContent>
                  <CardActions>
                    <Rating value={rating.rate} />
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Drawer open={isOpen} onClose={closeMenu} anchor="right">
        <Box sx={{ display: "flex", width: 450 }}>
          <Typography sx={{ flexGrow: 1, my: 1, px: 2 }} variant="h5">
            Shopping Cart
            <Badge sx={{ mx: 2 }} badgeContent={totalItems} color="primary">
              <ShoppingCartSharpIcon />
            </Badge>
          </Typography>
          <CloseIcon
            sx={{ my: 1 }}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </Box>
        <Divider />
        <Box sx={{ my: 2 }}>
          {context.addCart.length === 0 ? (
            <Typography
              sx={{ my: 3, textAlign: "center" }}
              variant="h5"
              fontWeight={"bold"}
            >
              No product available in cart
            </Typography>
          ) : (
            context.addCart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Card
                  sx={{ maxWidth: 430, display: "flex" }}
                  variant="outlined"
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 100, width: "auto" }}
                    image={item.image}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>{item.title}</Typography>
                    <Typography>$ {item.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="to-black"
                      onClick={() => removeFromCart(item.id)}
                    >
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
          <Button
            variant="contained"
            fullWidth
            className="text-white bg-slate-900 hover:bg-slate-800"
            sx={{ backgroundColor: "#37474f", my: 2 }}
            onClick={openCheckout}
          >
            Go To Cart
          </Button>
        </Container>
      </Drawer>
      <Footer />
    </>
  );
};

export default Product;
