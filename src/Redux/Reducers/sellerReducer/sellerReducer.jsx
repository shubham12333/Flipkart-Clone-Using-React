import { SELLER_REGISTER } from "../../Actions/sellerActions/sellerRegisterType";

const initialState = {
    sellerData : []
}

const sellerReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case SELLER_REGISTER : 
        return {
            ...state, sellerData : action.payload
        }
         default:
      return state;
    }
}
export default sellerReducer;
