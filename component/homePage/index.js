import {
  Typography,
  Avatar,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Rating,
  Grid,
  Container,
} from "@mui/material";
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import PublicIcon from "@mui/icons-material/Public";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Link from "next/link";
import MyContext from "@/Context/myContext";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const context = useContext(MyContext);
  const router = useRouter();
  const OpenProduct = () => {
    router.push("/product");
  };

  return (
    <>
      <header>
        <title>E-commerce Shop</title>
      </header>
     
      <Box
        sx={{
          backgroundImage: `url('/Background.jpeg')`,
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundPosition: "fixed",
        }}
      >
        <Navbar />
        <Box sx={{ mx: 10, my: 20 }}>
          <Typography fontSize={100}>Shop With us</Typography>
          <Typography fontSize={20}>
            Your one-stop destination for smart shopping.
            <br />
            Discover trends, find deals, and enjoy a seamless experience.
            <br />
            Upgrade your shopping game today.
          </Typography>
          <Button
            variant="contained"
            className=" hover:bg-slate-800"
            sx={{ my: 2 }}
          >
            <Link href="/product">Shop Now</Link>
          </Button>
        </Box>
      </Box>
      <Container>
        <Box
          sx={{
            minHeight: "100vh",
           
          }}
        >
          <Typography
            fontSize={35}
            fontWeight={"bold"}
            sx={{ textAlign: "center", my: 3 }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={2} sx={{ my: 3 }}>
            {context.products.slice(15, 19).map((product) => {
              const { id, image, rating } = product;
              return (
                <Grid key={id} item xs={3}>
                  <Card
                    sx={{ maxWidth: 350, height: 300, cursor: "pointer" }}
                    variant="outlined"
                    onClick={OpenProduct}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: 250, mx: "auto", width: "auto" }}
                      image={image}
                    />

                    <CardActions>
                      <Rating value={rating.rate} />
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Typography
            fontSize={35}
            fontWeight={"bold"}
            sx={{ textAlign: "center", my: 10 }}
          >
            Best Seller
          </Typography>
          <Grid container spacing={2} sx={{ my: 3 }}>
            {context.products.slice(0, 4).map((product) => {
              const { id, image, rating } = product;
              return (
                <Grid key={id} item xs={3}>
                  <Card
                    sx={{ maxWidth: 350, height: 300, cursor: "pointer" }}
                    variant="outlined"
                    onClick={OpenProduct}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: 250, mx: "auto", width: "auto" }}
                      image={image}
                    />

                    <CardActions>
                      <Rating value={rating.rate} />
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundImage: `url('/Down.jpeg')`,
          minHeight: "30vh",
          backgroundPosition: "center",
        }}
      ></Box>
      <Container>
        <Box sx={{ display: "flex", my: 10 }}>
          <Box sx={{ mx: 6 }}>
            <Avatar sx={{ mx: 6 }}>
              <PublicIcon />
            </Avatar>
            <Typography sx={{ my: 2 }} fontSize={20} fontWeight={"bold"}>
              World wide Shipping
            </Typography>
          </Box>
          <Box sx={{ mx: 6 }}>
            <Avatar sx={{ mx: 3 }}>
              <LocalOfferSharpIcon />
            </Avatar>
            <Typography sx={{ my: 2 }} fontSize={20} fontWeight={"bold"}>
              Best Quality
            </Typography>
          </Box>
          <Box sx={{ mx: 6 }}>
            <Avatar sx={{ mx: 6 }}>
              <StarsRoundedIcon />
            </Avatar>
            <Typography sx={{ my: 2 }} fontSize={20} fontWeight={"bold"}>
              Excelent Services
            </Typography>
          </Box>
          <Box sx={{ mx: 6 }}>
            <Avatar sx={{ mx: 10 }}>
              <LocalShippingIcon />
            </Avatar>
            <Typography sx={{ my: 2 }} fontSize={20} fontWeight={"bold"}>
              Fast and Free Delivery
            </Typography>
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
