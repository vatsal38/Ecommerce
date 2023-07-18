import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  Badge,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Mycontext from "@/Context/myContext";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const Navbar = () => {
  const context = useContext(Mycontext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const totalItems = context.addCart.length;
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    router.push("/Login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#37474f" }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1, mx: 1 }} variant="h4">
          E-commerce Shop
        </Typography>
        <Typography sx={{ mx: 2 }}>
          <Link href="/">Home</Link>
        </Typography>
        <Typography sx={{ mx: 2 }}>
          <Link href="/Product">Products</Link>
        </Typography>
        <Typography sx={{ mx: 2 }}>
          <Link href="/cart">Cart</Link>
          <Badge badgeContent={totalItems} color="primary">
            <ShoppingCartSharpIcon />
          </Badge>
        </Typography>

        <Typography sx={{ mx: 2 }}>
          <Link href="/about">About us</Link>
        </Typography>

        <Avatar onClick={openMenu} sx={{ mx: 2 }}>
          <PersonIcon />
        </Avatar>
        <Menu
          open={isOpen}
          onClose={closeMenu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ my: 6, mr: 10 }}
          keepMounted
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
