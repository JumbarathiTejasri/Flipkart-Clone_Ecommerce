import axios from 'axios';

import * as actionType from '../constants/cartConstant';

const URL = process.env.REACT_APP_API_URL;



export const addToCart=(id,quantity)=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${URL}/product/${id}`);
        dispatch({ type:actionType.ADD_TO_CART,payload:{...data,quantity}});
    }catch(error){
        dispatch({ type:actionType.ADD_TO_CART_ERROR,payload:error.message});
    }

}
export const removeFromCart=(id)=>async(dispatch)=>{
   dispatch({type:actionType.REMOVE_FROM_CART,payload:id});

}

export const emptyCart = () => (dispatch) => {
  dispatch({ type: actionType.EMPTY_CART });
};
