
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import SellerInfo from './components/extradetails/SellerInfo';
import MoreInfo from './components/extradetails/MoreInfo';
import ConfirmPayment from './components/payment/ConfirmPayment';
import PaymentSuccess from './components/payment/PaymentSuccess';


import {Box} from '@mui/material';

import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
   <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop:54}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/seller-info' element={<SellerInfo />} />
            <Route path='/more-info' element={<MoreInfo />} />
            <Route path="/confirm-payment" element={<ConfirmPayment />} />
            <Route path='/payment-success' element={<PaymentSuccess />} />
          </Routes>
        </Box>
      </BrowserRouter>
   </DataProvider> 
     
  );
}

export default App;
