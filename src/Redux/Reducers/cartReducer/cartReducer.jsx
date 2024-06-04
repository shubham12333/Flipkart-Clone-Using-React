import {
  ADD_TO_CART,
  DECREMENT,
  DELETE_FROM_CART,
  INCREMENT,
} from "../../Actions/cartActions/cartActionType";
const initialState = [
];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productData = action.payload;

      {
        return [...state, { ...productData }];
      }
    case DELETE_FROM_CART:
      const id = action.payload;
      const newList = state.filter((elem) => elem.id !== id);
      return [...newList];
      break;
    case INCREMENT:      
      state.map((curElem)=>{
        if(curElem.id===action.payload){
          curElem.quantity = curElem.quantity + 1;
          return {...curElem}
        }
        return curElem;
      })
      return [...state]
      break;
      case DECREMENT:
          const updatedCart = state.map((curElem)=>{
        if(curElem.id===action.payload){
          curElem.quantity = curElem.quantity - 1;
          return {...curElem}
        }
        return curElem;
      }).filter((curElem)=>{
        return curElem.quantity !== 0;
      })
      return [...updatedCart]
      break;
    default:
      return state;
  }

};
export default cartReducer;
