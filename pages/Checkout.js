import Mycontext from "@/Context/myContext";
import Navbar from "@/component/Navbar";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  List,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const Checkout = () => {
  const context = useContext(Mycontext);
  const [Error, setError] = useState("");
  const router = useRouter();
  const { FirstName, LastName, Address, City, State, ZipCode, County } =
    context.orderDetail;
  const { CardHolderName, CardNumber, ExpiryDate, Cvv } = context.paymentDetail;

  const SubmitDetail = (e) => {
    e.preventDefault();
    if (
      !FirstName ||
      !LastName ||
      !Address ||
      !City ||
      !State ||
      !ZipCode ||
      !County
    ) {
      setError("Please enter the shipping details field.");
    } else if (!CardHolderName || !CardNumber || !ExpiryDate || !Cvv) {
      setError("pls enter Payment filed");
    } else if (context.addCart.length === 0) {
      setError("your order is empty");
    } else {
      context.OrderInfo(context.orderDetail);
      context.PaymentInfo(context.paymentDetail);
      router.push("/Invoice");
    }

  };
  setTimeout(() => {
    setError(null);
  }, 2000);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    context.setOrderDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    context.setPaymentDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Navbar />
      
      <Container>
      
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Box
              sx={{
                maxWidth: 500,
                height: 750,
                mx: "auto",
                my: 2,
                boxShadow: 5,
              }}
            >
              <Box sx={{ mx: 2 }}>
                <Typography sx={{ textAlign: "center", my: 2 }} variant="h5">
                  Checkout
                </Typography>
                <Typography sx={{ fontSize: 20 }}>Shipping address</Typography>

                <Grid container spacing={2} sx={{ my: 2 }}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="First Name"
                      type="text"
                      name="FirstName"
                      value={context.orderDetail.FirstName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="Last Name"
                      type="text"
                      name="LastName"
                      onChange={handleInputChange}
                      value={context.orderDetail.LastName}
                    />
                  </Grid>
                </Grid>
                <TextField
                  label="Address"
                  name="Address"
                  type="text"
                  fullWidth
                  sx={{ my: 2 }}
                  onChange={handleInputChange}
                  value={context.orderDetail.Address}
                />
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="City"
                      type="text"
                      name="City"
                      onChange={handleInputChange}
                      value={context.orderDetail.City}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="State"
                      type="text"
                      name="State"
                      onChange={handleInputChange}
                      value={context.orderDetail.State}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ my: 1 }}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="Zip Code"
                      type="tel"
                      name="ZipCode"
                      onChange={handleInputChange}
                      value={context.orderDetail.ZipCode}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="County"
                      type="text"
                      name="County"
                      onChange={handleInputChange}
                      value={context.orderDetail.County}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ mx: 2 }}>
                <Typography sx={{ fontSize: 20, my: 2 }}>
                  Payment Info
                </Typography>
                <TextField
                  label="Card Holder Name"
                  type="text"
                  name="CardHolderName"
                  fullWidth
                  value={context.orderDetail.CardHolderName}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Card Number"
                  type="text"
                  fullWidth
                  sx={{ my: 2 }}
                  name="CardNumber"
                  onChange={handleInputChange}
                  value={context.orderDetail.CardNumber}
                />
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="Expiry Date"
                      type="text"
                      name="ExpiryDate"
                      onChange={handleInputChange}
                      value={context.orderDetail.ExpiryDate}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="CVV"
                      type="text"
                      name="Cvv"
                      onChange={handleInputChange}
                      value={context.orderDetail.Cvv}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button
                className="text-white bg-slate-900 hover:bg-slate-800"
                sx={{ width: 465, mx: 2, mt: 3 }}
                onClick={SubmitDetail}
              >
                Confirm Order
              </Button>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box
              sx={{
                maxWidth: 500,
                height: 750,
                mx: "auto",
                my: 2,
                boxShadow: 5,
              }}
            >
              <Typography sx={{ textAlign: "center" }} variant="h5">
                Order Summary
              </Typography>

              <Box sx={{ mx: 2, my: 3 }}>
                {context.addCart.length === 0 ? (
                  <Typography sx={{ textAlign: "center", my: 2 }} variant="h5">
                    Your Order is empty
                  </Typography>
                ) : (
                  <>
                    {context.addCart.map((item) => {
                      return (
                        <Card key={item.id}>
                          <CardMedia
                            component="img"
                            sx={{ height: 100, mx: "auto", width: "auto" }}
                            image={item.image}
                          />
                          <CardContent>
                            <Typography>{item.title}</Typography>
                            <Typography>$ {item.price}</Typography>
                          </CardContent>
                        
                        </Card>
                      );
                    })}
                    <List sx={{ display: "flex" }}>
                      <Typography sx={{ flexGrow: 1, fontSize: 20 }}>
                        Total
                      </Typography>
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
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {Error && <Alert severity="error" sx={{width:200 , mx:2 }}>{Error}</Alert>}
    </>
  );
};

export default Checkout;
