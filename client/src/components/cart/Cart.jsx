import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  styled
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { calculateTotal } from "./TotalView";


const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "14px 0"
  }
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15
  }
}));

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

 const handlePlaceOrder = () => {
  const totalPrice = calculateTotal(cartItems); // accurate total
  navigate('/confirm-payment', { state: {cartItems,totalPrice } });
};


  return (
    <>
      <style>{`
        .left {
          width: 75%;
          float: left;
        }
        .right {
          width: 25%;
          float: left;
        }
        @media (max-width: 960px) {
          .left, .right {
            width: 100%;
            float: none;
          }
        }
      `}</style>

      {cartItems.length ? (
        <Container container>
          <LeftComponent item className="left">
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton onClick={handlePlaceOrder}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item className="right">
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
