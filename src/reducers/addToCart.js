import { ADD_TO_CART } from '../constants/actiontype';

const initialState = {
    cartvalue : 0
}

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
        var state = {
            ...state,
            cartvalue : state.cartvalue + action.payload
        }
        return state;
        default:
        return state;
    }
};

export default addToCartReducer;