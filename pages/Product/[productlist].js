import { useRouter } from "next/router";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import {
  Box,
  Container,
  Typography,
  Button,
  Rating,
  List,
  Drawer,
  Badge,
  Divider,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { useContext, useState } from "react";
import MyContext from "@/Context/myContext";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const products = router.query.productlist;
  const context = useContext(MyContext);
  const totalItems = context.addCart.length;

  const selectedProduct = context.products.find(
    (product) => product.id === parseInt(products)
  );

  console.log(selectedProduct);
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

  console.log("selectedProduct:", selectedProduct);
  console.log("context.products:", context.products);
  console.log("products", products);

  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar />

        <Container>
          {selectedProduct && (
            <Box sx={{ display: "flex", mt: 20 }}>
              <img
                src={selectedProduct.image}
                height={300}
                width={300}
                alt=""
              />
              <List>
                <Typography
                  sx={{ mx: 2, mt: 7 }}
                  fontSize={22}
                  fontWeight="bold"
                >
                  {selectedProduct && selectedProduct.title}
                </Typography>

                <Typography sx={{ mx: 2, my: 2 }}>
                  {selectedProduct.category}
                </Typography>
                <Typography sx={{ mx: 2, my: 2 }}>
                  {selectedProduct.description}
                </Typography>
                <Typography sx={{ mx: 2, my: 2 }}>
                  ${selectedProduct.price}
                </Typography>
                <Rating
                  sx={{ mx: 2, my: 2 }}
                  value={selectedProduct.rating.rate}
                />
                <Button
                  variant="contained"
                  sx={{ display: "flex", mx: 2 }}
                  className="hover:bg-slate-800  "
                  onClick={() => AddToCart(selectedProduct)}
                >
                  Add to Cart
                </Button>
              </List>
            </Box>
          )}
        </Container>
      </Box>
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

export default ProductPage;
