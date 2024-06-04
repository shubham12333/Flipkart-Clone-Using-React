import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { signupModal } from "../../Redux/Actions/modal_Action/action";
import "./SignupModal.css";
import { SignupForm } from "../Forms/User/SinupForm";

export const SignupModal = ({ data }) => {
  const [visible, setVisible] = useState(data);
  const appDispatch = useDispatch();
  return (
    <>
      <Modal
        className="Modal"
        centered
        visible={visible}
        onCancel={() => {
          appDispatch(signupModal(false));
          setVisible(false);
        }}
        width={600}
        height={500}
        footer={null}
      >
        <SignupForm />
      </Modal>
    </>
  );
};
