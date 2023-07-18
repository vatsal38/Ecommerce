import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Alert
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Mycontext from "@/Context/myContext";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const context = useContext(Mycontext);
  const submitData = (e) => {
    e.preventDefault();
    if (!username || username.trim() === "") {
      setError("Please enter username");
      return;
    }
    if (!password ||username.trim() === "") {
      setError("Please enter password");
      return;
    }
    try {
      context.LoginData(username, password);
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <Container>
    
      <Box sx={{ marginTop: 20, borderRadius: 3, boxShadow: 4 }}>
        <Grid container>
          <Grid item sm={7}>
            <Box >
              <Image src="/Logo.jpeg" width={"600"} height={"400"} alt="" />
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ my: 2 }} fontWeight={"bold"}>
                Sign in
              </Typography>
              <Box maxWidth={370}>
                <TextField
                  label="Username"
                  name="username"
                  sx={{ my: 2 }}
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  name="password"
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                 {error && <Alert severity="error">{error}</Alert>}
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 8, mb: 2 }}
                  onClick={submitData}
                >
                  Sign In
                </Button>
                <Grid container spacing={1}>
                  <Grid item sm={5}>
                    <Link href="">Forgot Password?</Link>
                  </Grid>
                  <Grid item sm={7}>
                    <Link href="">Do you have register? Sign up</Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
