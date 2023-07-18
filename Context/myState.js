import axios from "axios";
import MyContext from "../Context/myContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";

const MyState = (props) => {
  const [products, setProducts] = useState([]);
  const [Login, SetLogin] = useState([]);

  const [addCart, setAddCart] = useState([]);
  const router = useRouter();
  const [orderDetail, setOrderDetail] = useState([
    {
      FirstName: "",
      LastName: "",
      Address: "",
      City: "",
      State: "",
      ZipCode: "",
      County: "",
    },
  ]);
  const [paymentDetail, setPaymentDetail] = useState({
    CardHolderName: "",
    CardNumber: "",
    ExpiryDate: "",
    Cvv: "",
  });

  const api = axios.create({
    baseURL: "https://fakestoreapi.com",
  });
  const loginApi = axios.create({
    baseURL: "https://dummyjson.com",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const LoginData = async (username, password) => {
    try {
      const loginResponse = await loginApi.post("/auth/login", {
        username,
        password,
      });
      if (loginResponse.data) {
        router.push("/");
     
      }
    } catch (error) {
      <Alert severity="error">Login Failed</Alert>
    }
  };
  const CartData = (product) => {
    setAddCart([...addCart, product]);
  };

  const OrderInfo = (product) => {
    setOrderDetail(product);
  };

  const PaymentInfo = (product) => {
    setPaymentDetail(product);
  };
  const LogoutInfo = () => {
    SetLogin(null);
  };

  return (
    <MyContext.Provider
      value={{
        products,
        addCart,
        orderDetail,
        paymentDetail,
        Login,
        loginApi,

        OrderInfo,
        CartData,
        setAddCart,
        PaymentInfo,
        setOrderDetail,
        setPaymentDetail,
        LoginData,
        LogoutInfo,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
