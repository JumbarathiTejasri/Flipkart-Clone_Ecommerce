import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/system';
import LockIcon from '@mui/icons-material/Lock';
import paytmLogo from '../../assets/paytm.png'; 

// Styled Containers
const Container = styled(Box)({
  width: '100%',
  maxWidth: 420,
  margin: '80px auto',
  padding: '32px 24px',
  borderRadius: '12px',
  background: '#fff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  minHeight: '550px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const PaytmLogo = styled('img')({
  width: 100,
  height: 100,
  objectFit: 'contain',
  margin: '0 auto',
  display: 'block',
});

const ProceedButton = styled(Button)({
  backgroundColor: '#0096c7',
  color: '#fff',
  height: 48,
  fontSize: 16,
  marginTop: 20,
  borderRadius: 6,
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  '&:hover': {
    backgroundColor: '#0077a6',
  },
});

const ConfirmPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalPrice } = location.state || {};

  const availableBalance = 7484.55;
  const baseFare = totalPrice ? totalPrice - 5.1 : 0;

  const [agreed, setAgreed] = useState(false);

  const handleConfirmPay = () => {
    if (agreed) {
      navigate('/payment-success', { state: { amount: totalPrice } });
    } else {
      alert('Please agree to the terms and conditions to proceed.');
    }
  };

  return (
    <Container>
      <Box>
        {/* Logo */}
        <PaytmLogo src={paytmLogo} alt="Paytm" />

        {/* Balance Info */}
        <Typography variant="body1" align="center" mt={2}>
          Your available Paytm Balance <strong>₹{availableBalance.toFixed(2)}</strong>
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Fare Breakdown */}
        <Typography variant="body2" sx={{ color: 'gray' }}>
          Total Fare
          <span style={{ float: 'right' }}>₹{baseFare.toFixed(2)}</span>
        </Typography>
        <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
          Payment charges and taxes as applicable
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3 }}>
          Total Amount
          <span style={{ float: 'right' }}>₹{totalPrice}</span>
        </Typography>

        {/* Info + Lock + Text */}
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: '#f1f1f1',
              borderRadius: 2,
              padding: '10px 16px',
            }}
          >
            <LockIcon color="primary" />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              You are about to make a secure payment
            </Typography>
          </Box>

          <Typography variant="caption" color="textSecondary" sx={{ mt: 1, ml: 1 }}>
            This payment is powered by Paytm Secure™
          </Typography>
        </Box>

        {/* Terms Checkbox */}
        <FormControlLabel
          control={<Checkbox checked={agreed} onChange={() => setAgreed(!agreed)} />}
          label="I agree to the Terms & Conditions"
          sx={{ mt: 3 }}
        />
      </Box>

      {/* Proceed Button */}
      <ProceedButton onClick={handleConfirmPay} disabled={!agreed}>
        <LockIcon fontSize="small" />
        Proceed to Pay
      </ProceedButton>
    </Container>
  );
};

export default ConfirmPayment;
