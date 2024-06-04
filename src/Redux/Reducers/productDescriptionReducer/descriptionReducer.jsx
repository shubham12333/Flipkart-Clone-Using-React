import { PRODUCT_ID } from "../../Actions/productDescription/productType";
const initialState = []
const productDescriptionReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case PRODUCT_ID :   
        return action.payload
        default:
            return state;
    }
}
export default productDescriptionReducer;
