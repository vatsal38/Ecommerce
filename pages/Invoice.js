import Mycontext from "@/Context/myContext";
import Navbar from "@/component/Navbar";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  Button
} from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";

const Invoice = () => {
  const [orderNumber, setOrderNumber] = useState(0);
  const context = useContext(Mycontext);
  const router = useRouter()
  useEffect(() => {
    setOrderNumber(Math.floor(Math.random() * 101));
  }, []);

  const Submit =()=>{
    router.push("/")
    context.setAddCart([]) 
  }
  return (
    <div>
      <Navbar />
      <Container sx={{ my: 2 }}>
        <Box sx={{ boxShadow: 5, height: 700, maxWidth: 600, mx: "auto" }}>
          <Typography
            sx={{ textAlign: "center" }}
            variant="h4"
            fontWeight={"bold"}
          >
            Invoice
          </Typography>
        

          <Typography sx={{ mx: 2, my: 2 }}>
            Order Number # {orderNumber}
          </Typography>
          <Box>
            {Array.isArray(context.orderDetail)  ? (
              context.orderDetail.map((item) => (
                <List key={item.id}>
                <Typography>{item.FirstName}</Typography>
              </List>
              ))
            ) : (
              <Box sx={{ mx: 2 }}>
                <Typography fontSize={20}> Shipping address</Typography>
                <Typography>
                  {context.orderDetail.FirstName} {context.orderDetail.LastName}
                </Typography>
                <Typography> {context.orderDetail.Address}</Typography>
                <Typography>{context.orderDetail.City}</Typography>
                <Typography>{context.orderDetail.State}</Typography>
                <Typography>{context.orderDetail.ZipCode}</Typography>
                <Typography>{context.orderDetail.County}</Typography>
              </Box>
            )}
          </Box>

          <Box>
            {Array.isArray(context.paymentDetail) ? (
              context.paymentDetail.map((item) => (
                <List key={item.id}>
                  <Typography key={item.id}>{item.FirstName}</Typography>
                </List>
              ))
            ) : (
              <Box sx={{ mx: 2, my: 3 }}>
                <Typography fontSize={20}>Payment Details</Typography>
                <Typography>  {context.paymentDetail.CardHolderName}</Typography>
                <Typography> {" xxxx-xxxx-" +context.paymentDetail.CardNumber.slice(0 ,4 )}</Typography>
              </Box>
            )}
          </Box>
          <Box sx={{ my: 2, mx: 2 }}>
            {context.addCart.map((item) => {
              return (
                <Card key={item.id} sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 100, width:'auto'}}
                    image={item.image}
                  />
                  <CardContent>
                    <Typography>{item.title}</Typography>
                    <Typography>$ {item.price}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
          <Typography sx={{ textAlign: "center" }}>
            <Button onClick={Submit}>   Continue shopping</Button>
           
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Invoice;
