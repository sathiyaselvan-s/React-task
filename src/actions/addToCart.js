import { ADD_TO_CART } from '../constants/actiontype';

export const addValueToCart = (value) => {
    return {
        type : ADD_TO_CART,
        payload : value 
    }
};