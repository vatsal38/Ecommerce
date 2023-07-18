import React from "react";
import Navbar from "../Navbar";
import { Box, Typography, Button } from "@mui/material";

import Footer from "../Footer";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("/about.jpg")`,
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Box sx={{ mx: 10 }}>
          <Typography
            fontSize={100}
            sx={{ textAlign: "center" }}
            className="text-white"
          >
            About us
          </Typography>
          <Typography sx={{ textAlign: "center",my:5 }} className="text-white">
            Welcome to our e-commerce shopping website! We are thrilled to have
            you here and would like to tell you a bit about ourselves.
          </Typography>
          <Typography sx={{ textAlign: "center" ,my:5}} className="text-white">
             e-commerce shop , we are passionate about providing a seamless
            online shopping experience to our valued customers. <br />
            Our platform was created with the goal of offering a wide range of
            high-quality products, competitive prices, and exceptional customer
            service.
          </Typography>
          <Typography sx={{ textAlign: "center" ,my:6 }} className="text-white">
             e-commerce shop , we are committed to continuous improvement and
            staying at the forefront of e-commerce trends. <br /> We constantly
            update our inventory, introduce new features, and enhance our
            website's functionality to provide you with, <br/> the best  possible 
            shopping  experience. service.
          </Typography>
          <Typography sx={{ textAlign: "center", my:7 }} className="text-white">
            Thank you for choosing e-commerce shop. We look forward to serving
            you and being your trusted online shopping destination. <br/> Happy
            shopping!
          </Typography>
          <Box textAlign='center'>
          <Button
            variant="contained"
            className=" hover:bg-slate-800"
            sx={{ my: 'center' }}
          >
            <Link href="/product">Shop Now</Link>
          </Button>
          </Box>
          
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
