import {useState,useContext} from 'react';

import  {Badge, Box,Button,Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

import {DataContext} from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';


const Wrapper =styled(Box)(({theme})=>({
          display:'flex',
          margin:'0 3% 0 auto',
          '& > *': 
          {
          alignItems:'center',
          marginRight:'40px !important',
          color:'#FFFFFF',
          fontSize:16,
          },
          [theme.breakpoints.down('md')]:{
            display:'flex',
            flexDirection:'column',
            marginTop:10,
            color:'#2874f0',
            alignItems:'center',
            '& > *':{
              margin:'10px 0',
              color: '#000000 !important',
            },
          },
          [theme.breakpoints.down('sm')]:{
            display:'block'
          }

}))

const Container=styled(Link)
        `display:flex;
        textDecoration:'none';
        color:'inherit';`
       
         


const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
})) 

const CustomButtons=()=>{
      const [open,setOpen]=useState(false);
       
      const { account,setAccount} = useContext(DataContext); 

      const {cartItems}=useSelector(state=>state.cart);

      const openDialog=()=>{
        setOpen(true);
      }

      const handleSellerClick = () => {
      window.open('/seller-info', '_blank'); // Opens new tab
      };

      const handleMoreClick = () => {
      window.open('/more-info', '_blank'); // Opens new tab
      };


    return(
        <Wrapper>
          {
            account ? <Profile account={account} setAccount={setAccount} />:
            <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
          }
          <Typography style={{ marginTop: 3, width: 135, cursor: 'pointer' }} onClick={handleSellerClick}>Become a Seller</Typography>
          <Typography style={{marginTop:3, cursor: 'pointer'}}  onClick={handleMoreClick}>More</Typography>

          <Container to="/cart">
               <Badge badgeContent={cartItems?.length} color="secondary">
                  <ShoppingCart />
               </Badge>
               <Typography style={{ marginLeft: 10 }}>Cart</Typography>
          </Container>
          <LoginDialog open={open} setOpen={setOpen}/> 
        </Wrapper>
    );
}

export default CustomButtons;