// src/components/AuthModal.jsx
import React, { useState } from "react";
import { Modal } from "antd";
import Login from "../authentication/loginmodel/Login";
import SignUp from "../authentication/registration/sign-up";

const AuthModal = ({ open, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={onClose}
      centered
      width={400}
      destroyOnClose
      className="auth-modal"
    >
      {isLogin ? (
        <Login switchToSignup={() => setIsLogin(false)} />
      ) : (
        <SignUp switchToLogin={() => setIsLogin(true)} />
      )}
    </Modal>
  );
};

export default AuthModal;
