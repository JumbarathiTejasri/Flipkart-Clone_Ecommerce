import { useState } from 'react';
import { Box, Button, styled, Dialog, Typography } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, emptyCart } from '../../redux/actions/cartActions';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px',
  },
}));

const Image = styled('img')({
  width: '85%',
  padding: '15px',
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: 50,
  borderRadius: 2,
  [theme.breakpoints.down('lg')]: {
    width: '46%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%',
  },
}));

const PaymentDialog = styled(Dialog)`
  & .MuiDialog-paper {
    padding: 20px;
    text-align: center;
  }
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false); // for payment modal

  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
  };

  const handleBuyNow = () => {
  const totalPrice = product.price.cost * quantity; // or use real cart total
  navigate('/confirm-payment', { state: { product, totalPrice } });};


  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0' }}>
        <Image src={product.detailUrl} />
      </Box>

      <StyledButton
        variant="contained"
        onClick={addItemToCart}
        style={{ marginRight: 10, background: '#ff9f00' }}
      >
        <Cart />
        Add to Cart
      </StyledButton>

      <StyledButton variant="contained" onClick={handleBuyNow} style={{ background: '#fb541b' }}>
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
