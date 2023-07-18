
import {
    Container,
    Box,
    Typography,
    TextField,

    Button,
  
  } from "@mui/material";
import Link from "next/link";
const Fpassword = () => {
  return (
<Container>
      <Box
        maxWidth={350}
        maxHeight={500}
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Typography variant="h5" sx={{ my: 2, textAlign: "center" }}>
        ForgotPassword
        </Typography>
        <Box>
      
          <TextField label="OldPassword" fullWidth type="tel"   sx={{my:1}}/>
          <TextField label="Password" fullWidth type="password"   sx={{my:1}}/>
          <TextField label="Confirm Password" fullWidth type="password"   sx={{my:1}}/>
          <Button  variant="contained" fullWidth  sx={{my:2}}>Change Password</Button>
          <Typography >
                <Link href="/Login"> Sign in</Link>
                </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Fpassword
