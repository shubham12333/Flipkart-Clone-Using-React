import { SELLER_LIST, FETCH_PENDING, FETCH_FAIL } from "./sellerListType";
import axios from "axios";

export const getsellerList = () => async (dispatch) => {
  await dispatch({ type: FETCH_PENDING, payload: true });
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDkzMjk2NDEsImV4cCI6MTY0OTMzMzI0MSwiYXVkIjoiNjI0ZDM3ODUwMmJhYmFhODEyMzE3MTI3IiwiaXNzIjoic291cmFiaEBnbWFpbC5jb20ifQ.hRWi9UPj01-tZq7kNaZpa-7QzTlTtUZRBTl2Feve864'
  // console.log(token);
  await axios
    .get("https://purple-mole-82.loca.lt/auth/admin/getAllSeller", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(async (res) => {
      console.log(res);
      await dispatch({ type: SELLER_LIST, payload: res.data.result });
      await dispatch({ type: FETCH_PENDING, payload: false });
    })
    .catch(async (error) => {
      console.log("Error>>", error);
      await dispatch({ type: FETCH_FAIL, payload: error });
      await dispatch({ type: FETCH_PENDING, payload: false });
    });
};
