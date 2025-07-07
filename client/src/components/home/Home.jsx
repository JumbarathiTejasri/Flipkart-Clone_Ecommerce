import {useEffect} from 'react';

//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import Footer from '../Footer/Footer';

import {Box,styled} from '@mui/material';

import {getProducts} from '../../redux/actions/productAction';
import {useDispatch,useSelector} from 'react-redux';

const Component=styled(Box)
        `padding:10px;
        background:#F2F2F2;`

const Home=()=>{
    const {products}= useSelector(state=>state.getProducts)

    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch])

    return(
        <>
            <NavBar />
            <Component>
                 <Banner />
                 <MidSlide products={products} title="Deals of the day" timer={true}/>
                 <MidSection />
                 <Slide products={products} title="Discounts for you" timer={false}/>
                 <Slide products={products} title="Suggested Items" timer={false}/>
                 <Slide products={products} title="Top Selection" timer={false}/>
            </Component>
            <Footer />

        </>
    );
}

export default Home;