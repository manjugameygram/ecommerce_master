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

const ForgotpasswordSchema = Yup.object().shape({
    email: Yup.string().required('Enter your email or mobile phone number.'),
    
});

class Forgotpassword extends Component {
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
        console.log("Forgotpassword", this.props);
        return (
            <>
                <Navbar />

                <Breadcrumb title="Forgotpassword" />
                <section className="signup-area ptb-60">
                <div className="container">
                    <div className="signup-content">
                        <div className="section-title">
                            <h2><span className="dot"></span> Forgotpassword</h2>
                        </div>
                

                                    <Formik
                                        validationSchema={ForgotpasswordSchema}
                                        onSubmit={values => {
                                            this.onFinish(values);
                                        }}
                                        enableReinitialize={true}
                                        initialValues={{
                                            email: ''
                                            
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
                                                    <br></br>
                                 <button type="submit" className="btn btn-primary">Forgotpassword</button>
                                 <br></br>
                                       <Link href="/ change-password">
                                       <a className="reset-paasword">Reset password</a>
                                       </Link>
                                </Col>
                             </Form.Row>
                         </Form>
                             )}
                     </Formik>
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

export default connect(mapStateToProps, mapDispathToProps)(Forgotpassword);
