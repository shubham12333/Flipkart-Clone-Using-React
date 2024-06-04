import axios from "axios";
import {
  APPROVE_FAILURE,
  APPROVE_PENDING,
  APPROVE_SUCCESS,
} from "./adminActionTypes";

export const approveSeller = (id) => async (dispatch) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDkzMjk2NDEsImV4cCI6MTY0OTMzMzI0MSwiYXVkIjoiNjI0ZDM3ODUwMmJhYmFhODEyMzE3MTI3IiwiaXNzIjoic291cmFiaEBnbWFpbC5jb20ifQ.hRWi9UPj01-tZq7kNaZpa-7QzTlTtUZRBTl2Feve864'
  await dispatch({ type: APPROVE_PENDING, payload: true });
  await axios
    .put(
      "https://brown-stingray-11.loca.lt/auth/admin/getAllSeller",
      { id: id },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then(async (res) => {
      console.log("Admin Action", res);
      await dispatch({ type: APPROVE_PENDING, payload: false });
    })
    .catch(async (error) => {
      console.log("Error>>", error);
      await dispatch({ type: APPROVE_PENDING, payload: false });
    });
};
