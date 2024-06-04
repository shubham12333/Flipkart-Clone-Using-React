import reducer from '../modal_Reducer/reducer';
import userReducer from '../userLogin/userLoginReducer';
import getProductReducer from '../getProductReducer/getProductReducer';
import cartReducer from '../cartReducer/cartReducer';
import productDescriptionReducer from '../productDescriptionReducer/descriptionReducer';
import sellerReducer from '../sellerReducer/sellerReducer';
import sellerLoginReducer from '../sellerReducer/Login/sellerLoginReducer';
import {combineReducers} from 'redux';
import sellerListReducer from '../../../Admin_Dashboard/Admin_Redux/Seller_List/Reducer/sellerListReducer';
import adminActionReducer from '../../../Admin_Dashboard/Admin_Redux/Admin_Actions/Reducer/adminActionReducers'

const rootReducer = combineReducers(
    {
        reducer,
        userReducer,
        getProductReducer,
        cartReducer,
        productDescriptionReducer,
        sellerReducer,
        sellerLoginReducer,
        sellerListReducer,
        adminActionReducer
    }
)
export default rootReducer;