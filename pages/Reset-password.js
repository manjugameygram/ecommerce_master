import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import { Navbar, Row, Col, Label } from 'reactstrap';



const ResetPwdSchema = Yup.object().shape({
    newPassword: Yup.string().required('Required').min(6, 'Too Short!').max(20, 'Too Long!'),
    newPasswordConfirmation: Yup.mixed().test(
        "match",
        "Passwords do not match",
        function () {
            return this.parent.newPassword === this.parent.newPasswordConfirmation;
        }
    )
});
const ResetPwd = () => {
    const onFinish = (values) => {
        console.log(values);
    }
    return (
        <>
        <Navbar />
        <Breadcrumb title="change password" />
            <section className="pwd-page section-b-space">
                
                    <Row>
                        <Col lg="6" className="m-auto">
                            <h2>Reset Password</h2>
                            <Formik
                                validationSchema={ResetPwdSchema}
                                onSubmit={values => { onFinish(values); }}
                                initialValues={{ 
                                    newPassword: '',
                                    newPasswordConfirmation: ''
                                }}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    setFieldValue,
                                    values,
                                    touched,
                                    errors,
                                    isValid
                                }) =>
                                    <Form className="theme-form" noValidate onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md="12">
                                                <Label style={{display:'flex'}}>New Password</Label>
                                                <Form.Control
                                                    type="password"
                                                    className="form-control text-left"
                                                    name="newPassword"
                                                    placeholder="Enter New Password"
                                                    required
                                                    value={values.newPassword}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.newPassword}
                                                />
                                                {errors.newPassword ? (
                                                    <Form.Control.Feedback style={{ marginBottom: '1em' }} type="invalid">{errors.newPassword}</Form.Control.Feedback>
                                                ) : null}
                                            </Col>
                                            <Col md="12">
                                                <Label style={{display:'flex'}}>Enter Password Again</Label>
                                                <Form.Control
                                                    type="password"
                                                    className="form-control text-left"
                                                    name="newPasswordConfirmation"
                                                    placeholder="Retype New Password"
                                                    required
                                                    value={values.newPasswordConfirmation}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.newPasswordConfirmation}
                                                />
                                                {errors.newPasswordConfirmation ? (
                                                    <Form.Control.Feedback style={{ marginBottom: '1em' }} type="invalid">{errors.newPasswordConfirmation}</Form.Control.Feedback>
                                                ) : null}
                                            </Col>
                                            <button type="button" disabled={!isValid} onClick={handleSubmit} className="btn btn-solid">Submit</button>
                                        </Row>
                                    </Form>
                                }
                            </Formik>
                        </Col>
                    </Row>
                
            </section>
        </>
    )
}

export default ResetPwd;