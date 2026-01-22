import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from "@ant-design/icons";
import "./sign-up.css";

const SignUp = ({ onLogin, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("SignUp values:", values);
    
    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      message.success("Registration successful! Welcome to Jeny.");
      form.resetFields();
      onClose();
    }, 2000);
  };

  return (
    <div className="signup-page">
      {/* Header with Logo */}
      <div className="signup-header">
        <div className="signup-logo">
          <div className="logo-icon-container">
            <HomeOutlined className="logo-icon" />
          </div>
          <div className="logo-text-container">
            <span className="logo-name">Jeny</span>
            <span className="logo-tagline">Find Your Perfect Home</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="signup-content">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join our community and start your journey</p>

        <Form
          form={form}
          name="signup-form"
          className="signup-form"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <div className="name-fields">
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "Please enter your first name!" }]}
              className="name-field"
            >
              <Input 
                prefix={<UserOutlined className="input-icon" />} 
                placeholder="First name" 
                className="auth-input"
              />
            </Form.Item>

            <Form.Item
              name="lastName"
              rules={[{ required: true, message: "Please enter your last name!" }]}
              className="name-field"
            >
              <Input 
                prefix={<UserOutlined className="input-icon" />} 
                placeholder="Last name" 
                className="auth-input"
              />
            </Form.Item>
          </div>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" }
            ]}
          >
            <Input 
              prefix={<MailOutlined className="input-icon" />} 
              placeholder="Email address" 
              className="auth-input"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
              { pattern: /^[0-9]{10}$/, message: "Please enter a valid 10-digit phone number!" }
            ]}
          >
            <Input 
              prefix={<PhoneOutlined className="input-icon" />} 
              placeholder="Phone number" 
              className="auth-input"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please create a password!" },
              { min: 8, message: "Password must be at least 8 characters!" },
              { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, message: "Password must contain uppercase, lowercase, and number!" }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="input-icon" />}
              placeholder="Create password"
              className="auth-input"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="input-icon" />}
              placeholder="Confirm password"
              className="auth-input"
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error("You must agree to the terms!")),
              },
            ]}
          >
            <Checkbox className="agreement-checkbox">
              I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="privacy-link">Privacy Policy</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="submit-btn"
              loading={loading}
              block
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>

        <div className="divider">
          <span>or sign up with</span>
        </div>

        <Button 
          className="social-btn"
          block
        >
          <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign up with Google
        </Button>

        <div className="auth-footer">
          <span>Already have an account? </span>
          <button 
            className="switch-link"
            onClick={onLogin}
          >
            Sign in here
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;