import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../Redux/Actions/modal_Action/action";
import { LoginForm } from "../Forms/User/LoginForm";
import "./Modal.css";

export const LoginModal = ({ data }) => {
  const [visible, setVisible] = useState(data);
  const appDispatch = useDispatch();
  return (
    <>
      <Modal
        className="Modal"
        centered
        visible={data}
        onCancel={() => {
          appDispatch(openModal(!data));
          setVisible(false);
        }}
        width={600}
        height={500}
        footer={null}
      >
        <LoginForm />
      </Modal>
    </>
  );
};
