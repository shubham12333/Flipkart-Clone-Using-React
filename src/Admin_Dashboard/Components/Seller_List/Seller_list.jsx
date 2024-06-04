import React, { useEffect } from "react";
import { getsellerList } from "../../Admin_Redux/Seller_List/Action/sellerListAction";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "antd";
import { CloseOutlined, CheckOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./Seller_list.css";
import { approveSeller } from "../../Admin_Redux/Admin_Actions/Action/adminActions";
import { Admin_header } from "../Admin_Header/Admin_header";
import { Sidemenu } from "../Sidemenu/Sidemenu";
export const Seller_list = () => {
  const sellerList = useSelector((state) => state?.sellerListReducer?.sellerList);
  console.log(sellerList);
  const loading = useSelector((state) => state.adminActionReducer.pending);
  const dispatch = useDispatch();
  const token = localStorage.getItem("Token");
  const adminActions = async (id, e) => {
    if (e === true) {
      dispatch(approveSeller(id));
    }
  };
    useEffect(() => {
    dispatch(getsellerList());
  }, []);
  return (<>
  <Admin_header/>
  <div className="sellerList-conatiner">
  <Sidemenu/>
    <div className="table">
      <table id="customers">
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          {sellerList?.map((seller) => (
            <>
              {!seller.isApprove && (
                <tr key={seller.id}>
                  <td>
                    <strong>{seller.fullName}</strong>
                  </td>
                  <td>{seller.id}</td>
                  <td>{seller.email}</td>
                  <td>{seller.phone}</td>
                  <td>
                    <Switch
                      disabled={seller.isApproved===true}
                      // checked={seller.isApproved===true}
                      onClick={(e) => adminActions(seller.id, e)}
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                    />
                  </td>
                  <td>
                    {seller.isApproved ? <CheckCircleOutlined className='approve'/>: <CloseCircleOutlined className='reject'/>}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};
