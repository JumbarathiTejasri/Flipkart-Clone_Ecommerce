import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/system';

const Container = styled(Box)({
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#fff',
  padding: '30px 20px',
});

const SuccessCircle = styled(Box)({
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundColor: '#d4f5dd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 24,
});

const AmountTag = styled(Typography)({
  fontSize: 16,
  marginBottom: 20,
  color: '#444',
});

const ContinueButton = styled(Button)({
  marginTop: 24,
  backgroundColor: '#0096c7',
  color: '#fff',
  padding: '10px 24px',
  borderRadius: 8,
  textTransform: 'none',
  fontSize: 16,
  '&:hover': {
    backgroundColor: '#0077a6',
  },
});

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location.state?.amount || 0;

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <Container>
      <SuccessCircle>
        <CheckCircleIcon sx={{ color: '#00c853', fontSize: 50 }} />
      </SuccessCircle>

      <Typography variant="h5" sx={{ color: '#1a1a2e', fontWeight: 600 }}>
        Payment Successful
      </Typography>

      <Typography variant="body1" sx={{ mt: 1 }}>
        🎉 Your order has been confirmed!
      </Typography>

      {amount > 0 && (
        <AmountTag>Amount Paid: ₹{amount.toFixed(2)}</AmountTag>
      )}

      <ContinueButton onClick={handleContinue}>
        Continue Shopping
      </ContinueButton>
    </Container>
  );
};

export default PaymentSuccess;
