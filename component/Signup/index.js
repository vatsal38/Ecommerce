import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Button,

} from "@mui/material";
import Link from "next/link";
const SignUp = () => {
  return (
    <Container>
      <Box
        sx={{
          marginTop: 15,
          backgroundColor: "white",
          boxShadow: 4,
          borderRadius: 3,
        }}
      >
        <Grid container>
          <Grid item sm={7}>
            <Box
              sx={{
                backgroundImage: `url('/Logo.jpeg')`,
                backgroundSize: "cover",
                minHeight: "60vh",
                backgroundPosition: "center",
              }}
            ></Box>
          </Grid>
          <Grid item sm={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mx: "auto",
              }}
            >
              <Typography
                variant="h5"
                sx={{ my: 2,}}
                fontWeight={"bold"}
              >
                Sign Up
              </Typography>
              <Box maxWidth={450}>
                <Grid container spacing={2} sx={{ my: 2 }}>
                  <Grid item sm={6} xs={12}>
                    <TextField label="First Name" fullWidth />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField label="Last Name" fullWidth />
                  </Grid>
                </Grid>

                <TextField
                  label="Email"
                  fullWidth
                  type="email"
                  sx={{ my: 1 }}
                />
                <TextField
                  label="Phone no"
                  fullWidth
                  type="tel"
                  sx={{ my: 1 }}
                />
                <TextField
                  label="Password"
                  fullWidth
                  type="password"
                  sx={{ my: 1 }}
                />
                <TextField
                  label="Confirm Password"
                  fullWidth
                  type="password"
                  sx={{ my: 1 }}
                />
                <Button  variant="outlined" fullWidth sx={{ my: 2 }}>
                  Sing Up
                </Button>
               
                <Typography >
                <Link href="/Login"> Do you have a already?Sign in</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUp;
