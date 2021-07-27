import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Yup from 'yup';

import Navbar from '../components/Layout/Navbar';
import Breadcrumb from '../components/Common/Breadcrumb';

import {
    userLogin,
    resetUserAuth
} from "./../redux/actions/auth";

const ForgotpasswordSchema = Yup.object().shape({
    email: Yup.string().required('Enter your email or mobile phone number.'),
    
});


class ChangePassword extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modalIsOpenPassword: false,
        isLoader: false,
        passwordType: 'password',
        passwordType1: 'password',
        passwordType2: 'password',
        passwordChangeState: false,
        oldPassword: '',
        password: '',
        cpassword: '',
        email: localStorage.getItem('email'),
        errors: {},
        changePassword1: {},
      };
      this.onChange = this.onChange.bind(this);
      this.openModalPassword = this.openModalPassword.bind(this);
      this.closeModalChangePassword = this.closeModalChangePassword.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.viewPassword = this.viewPassword.bind(this);
      this.viewPassword1 = this.viewPassword1.bind(this);
      this.viewPassword2 = this.viewPassword2.bind(this);
    }
  
    onChange(e) {
      this.setState({
        [e.target.name]: e.target.value,
        errors: {},
        errorsTermPolicy: {},
        errorsCompany: {},
      });
  
      this.props.clearDataChange();
    }
  
    viewPassword() {
      if (this.state.passwordType === 'password') {
        this.setState({ passwordType: 'text' });
      } else {
        this.setState({ passwordType: 'password' });
      }
    }
  
    viewPassword1() {
      if (this.state.passwordType1 === 'password') {
        this.setState({ passwordType1: 'text' });
      } else {
        this.setState({ passwordType1: 'password' });
      }
    }
  
    viewPassword2() {
      if (this.state.passwordType2 === 'password') {
        this.setState({ passwordType2: 'text' });
      } else {
        this.setState({ passwordType2: 'password' });
      }
    }
  
    isValidData() {
      const { errors, isValidData } = this.validateInputData(this.state);
  
      if (!isValidData) {
        this.setState({ errors });
      }
      return isValidData;
    }
  
    validateInputData(data) {
      const errors = {};
  
      if (Validator.isEmpty(data.oldPassword)) {
        errors.oldPassword = 'Current Password is required';
        errors.oldPasswordError = true;
      }
  
      if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
        errors.passwordError = true;
      }
      const re = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
      );
      if (!re.test(data.password)) {
        errors.password = 'Password must have 1 capital letter ,1 small letter ,1 special characters ,1 number and at least 8 character.';
        errors.passwordError = true;
      }
      if(!Validator.isEmpty(data.password)) {
        if(data.password !== data.cpassword) {
          errors.cpassword = 'Password does not match';
          errors.cpasswordError = true;
            
        }
      }
  
      return {
        errors,
        isValidData: isEmpty(errors),
      };
    }
  
    handleChangePassword(e) {
      e.preventDefault();
      if (this.isValidData()) {
        this.setState({
          modalIsOpenPassword: true,
          passwordChangeState: true,
          isLoader: true,
          isLoading: true,
        });
        this.props.changePasswordData(this.state);
      }
    }
  
    componentWillUnmount() {
      this.props.clearDataChange();
    }
  
  
    componentDidUpdate() {
      const { changePassword } = this.props.data;
      const { changePassword1 } = this.state;
      // if (this.state.passwordChangeState === true) {
      if (changePassword !== undefined) {
        // alert('changePassword')
        // console.log('dasdasdasdsad', changePassword);
  
        if (changePassword1 !== changePassword) {
          this.setState({
            changePassword1: changePassword,
            isLoader: false,
          });
          if (changePassword.data !== undefined) {
            if (changePassword.data.code === 200) {
              toast.success('Password changed successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              // console.log('testing password save success !!');
              // this.props.clearDataChange();
              this.setState({
                modalIsOpenPassword: false,
                errors: '',
              });
            } else {
              this.setState({
                errors: {
                  oldPassword: changePassword === "Incorrect username or password." ? "Incorrect Current Password" : changePassword,
                  oldPasswordError: true,
                },
              });
            }
          } else {
            this.setState({
              errors: {
                oldPassword: changePassword === "Incorrect username or password." ? "Incorrect Current Password" : changePassword,
                oldPasswordError: true,
              },
            });
          }
        }
        
      }
      
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state !== nextState || this.props !== nextProps) {
        return true;
      }
      return false;
    }
  
    openModalPassword() {
      this.setState({
        modalIsOpenPassword: true,
        oldPassword: '',
        password: '',
        cpassword: '',
        
        errors: {},
      });
    }
  
    closeModalChangePassword() {
      this.setState({ modalIsOpenPassword: false, isLoader: false, errors: {} });
      this.props.clearDataChange();
    }
  
  
    render() {
      const {
        cpassword,
        password,
        oldPassword,
        isLoader,
        errors,
        passwordType,
        passwordType1,
        passwordType2,
        
      } = this.state;
      let loader1;
      if (isLoader) {
        loader1 = (
          <div className="loader">
            <img src={loader} alt="" />
          </div>
        );
      }
  
      return (
        <span>
          {loader1}
          <Navbar />
          <Breadcrumb title="changepassword" />
          <Modal
            shouldCloseOnOverlayClick={false}
            isOpen={this.state.modalIsOpenPassword}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModalChangePassword}
            style={customStyles}
            contentLabel="test"
            ariaHideApp={false}
          >
            <div className= "change-profilepassword">
              <div className="col s12 m7">
                <h4> Change Password</h4>
              </div>
              <div className="col s12">
                <div className="grey-box">
                  <div className="grey-inner">
                    <p />
                    <div className="input-field col s12">
                      <div className="q-rt-question">
                        <TextFieldGroup
                          field="oldPassword"
                          label="Current Password*"
                          value={oldPassword}
                          error={errors.oldPassword}
                          onChange={this.onChange}
                          type={passwordType}
                          show
                        />
                        <span className="question-signup q-icon">
                          <a onClick={this.viewPassword}>
                            {' '}
                            <i className="small material-icons">visibility</i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="input-field col s12">
                      <div className="q-rt-question">
                        <TextFieldGroup
                          field="password"
                          label="New Password*"
                          value={password}
                          error={errors.password}
                          onChange={this.onChange}
                          type={passwordType1}
                          show
                        />
                        <span className="question-signup q-icon">
                          <a onClick={this.viewPassword1}>
                            {' '}
                            <i className="small material-icons">visibility</i>
                          </a>
                        </span>
                      </div>
                    </div>
  
                    <div className="input-field col s12">
                      <div className="q-rt -question">
                        <TextFieldGroup
                          field="cpassword"
                          label="Confirm New Password*"
                          value={cpassword}
                          error={errors.cpassword}
                          onChange={this.onChange}
                          type={passwordType2}
                          show
                        />
                        <span className="question-signup q-icon">
                          <a onClick={this.viewPassword2}>
                            {' '}
                            <i className="small material-icons">visibility</i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="btn-outer">
                    <button
                      onClick={this.handleChangePassword}
                      className="btn waves-effect waves-light primary-btn update-profile"
                      type="submit"
                      name="action"
                    >
                          Change password
                    </button>
  
                    <button
                      onClick={this.closeModalChangePassword}
                      style={{ marginLeft: '5px' }}
                      className="btn waves-effect waves-light primary-btn update-profile"
                      type="submit"
                      name="action"
                    >
                          Cancel
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
  
          
        </span>
      );
    }
  }
  
  ChangePassword.contextTypes = {
    router: PropTypes.object.isRequired,
  };
  const mapStateToProps = state => ({
    data: state.data,
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        changePasswordData,
        clearDataChange,
      },
      dispatch,
    );
  
  export default withAlert(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(ChangePassword),
  );
  
















