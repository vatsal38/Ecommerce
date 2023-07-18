import { Box, Typography } from "@mui/material";
import React from "react";
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const footer = () => {
  return (
    <Box
      color="white"
      sx={{
        backgroundColor: "#37474f",
        py: 5,
        bottom: 0,
        width: '100%',
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography fontSize={30} sx={{ mx: 5 }}>
          E-commerce Shop
          <InstagramIcon sx={{ mx: 2, height: 100 }} />
          <FacebookIcon sx={{ mx: 2 }} />
          <TwitterIcon sx={{ mx: 2 }} />
        </Typography>
        <Box sx={{ flexGrow: 1, mx: 15 }}>
          <Typography sx={{ my: 2 }}>
            <Link href="/">Home</Link>{" "}
          </Typography>
          <Typography sx={{ my: 2 }}>
            <Link href="/Product">Products</Link>
          </Typography>
          <Typography sx={{ my: 2 }}>
            {" "}
            <Link href="/cart">Cart</Link>
          </Typography>
          <Typography sx={{ my: 2 }}>
            {" "}
            <Link href="/about">About us</Link>
          </Typography>
        </Box>
        <Box sx={{ mr: 10 }}>
          <Typography fontWeight={"bold"}>Contact</Typography>
          <Typography sx={{ my: 2 }}>
            <HouseSharpIcon />
            Home
          </Typography>
          <Typography sx={{ my: 2 }}>
            <EmailOutlinedIcon />
            e.commerce@gmail.com
          </Typography>
          <Typography>
            <PhoneEnabledOutlinedIcon />
            +91 7894591323
          </Typography>
        </Box>
      </Box>

      <Typography sx={{ textAlign: "center" }}>
        © 2023 Copyright:E-commerce Shop
      </Typography>
    </Box>
  );
};

export default footer;
