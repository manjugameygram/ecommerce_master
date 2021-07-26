import React, { Component } from 'react';
import Link from 'next/link';
import {notification} from "antd";
import { Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';

import {
    userLogin,
    resetUserAuth
} from "./../redux/actions/auth";

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Enter your email or mobile phone number.'),
    password: Yup.string().required('Enter your password.')
});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    onFinish = values => {
        this.props.userLogin(values);
    };

    static getDerivedStateFromProps(nextProps, state){
        if(nextProps.auth){
          if(nextProps.auth.messageId === 200){
            notification['success']({
              message: 'Success',
              description: nextProps.auth.alertMessage
            });
            nextProps.resetUserAuth();
          } else if(nextProps.auth.messageId === 203){
            notification['error']({
              message: 'There was a problem!',
              description: nextProps.auth.alertMessage
            });
            nextProps.resetUserAuth();
          }
          return true;
        }
        return null;
    }

    render() {
        console.log("Login", this.props);
        return (
            <>
                <Navbar />

                <Breadcrumb title="Login" />

                <section className="login-area ptb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span> Login</h2>
                                    </div>

                                    <Formik
                                        validationSchema={LoginSchema}
                                        onSubmit={values => {
                                            this.onFinish(values);
                                        }}
                                        enableReinitialize={true}
                                        initialValues={{
                                            email: '',
                                            password: ''
                                        }}>
                                        {({
                                            handleSubmit,
                                            handleChange,
                                            values,
                                            touched,
                                            errors,
                                        }) => (
                                            <Form noValidate onSubmit={handleSubmit} className="login-form">
                                                <Form.Row>
                                                    <Col>
                                                        <Form.Label>Email or Mobile phone number</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            required
                                                            name="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.email}
                                                        />
                                                        {errors.email && touched.email ? (
                                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                                        ) : null}
                                                    </Col>
                                                </Form.Row>
                                                <Form.Row className='mt-5'>
                                                    <Col>
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control
                                                            type="password"
                                                            required
                                                            name="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.password}
                                                        />
                                                        {errors.password && touched.password ? (
                                                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                                        ) : null}
                                                    </Col>
                                                </Form.Row>
                                                <Form.Row className='mt-5'>
                                                    By continuing, you agree to GameyGram's &nbsp;       
                                                    <Link href="/terms">
                                                        <a className="forgot-password">Term & Condition</a>
                                                    </Link>
                                                    &nbsp; and &nbsp;
                                                    <Link href="/privacy-policy">
                                                        <a className="forgot-password">Privacy Policy</a>
                                                    </Link>
                                                </Form.Row>
                                                <Form.Row className='mt-5'>
                                                    <button type="submit" className="btn btn-primary">Login</button>
                                                </Form.Row>
                                                <Form.Row className='mt-5'>
                                                    <Link href="/forgot-password">
                                                        <a className="forgot-password">Lost your password?</a>
                                                       </Link>
                                                </Form.Row>
                                            </Form>
                                        )}
                                    </Formik>

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="new-customer-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span> New Customer</h2>
                                    </div>

                                    <span>Create an Account</span>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                    <Link href="/signup">
                                        <a className="btn btn-light">Create Account</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ userLogin, resetUserAuth }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(Login);
