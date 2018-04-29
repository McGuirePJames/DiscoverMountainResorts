import * as React from 'react'
import { Action } from 'redux';
import * as $ from 'jquery'
//import PropTypes from 'prop-types'

export interface Props {
    loginError: string;
    isPasswordRevealed?: boolean;
    login?: () => void;
    revealPassword?: () => void;
}




class UserLoginComponent extends React.Component<Props, object> {
    render() {
        const { loginError, isPasswordRevealed, revealPassword, login } = this.props;

        return (
            <div id="LoginComponentContainer">
                <div id="LoginComponent" className="row">
                    <div className="left col-sm-12 col-md-5">
                        <div>
                            <p className="display-4">Login</p>
                        </div>
                        <div>
                            <a href="/User/SignUp">Don't have an account?</a>

                        </div>
                        <div>
                            <a href="/User/ForgotPassword">Forgot Password?</a>

                        </div>
                    </div>
                    <div className="right col-sm-12 col-md-7">
                        <div className="form-group">
                            <label>Username</label>
                            <div className="form-group form-group-username">
                                <div className="icon-container icon-envelope">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <input id="LoginUsername" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group form-group-password">
                            <label>Password</label>
                            <div className="form-group">
                                <div className="icon-container icon-lock">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <input id="LoginPassword" type={isPasswordRevealed ? "text" : "password"} />
                                </div>
                                <div className="icon-container icon-eye">
                                    <i className="fa fa-eye" aria-hidden="true" onClick={revealPassword}></i>
                                </div>
                            </div>
                        </div>
                        <div className="login-container">
                            <div id="LoginButton" onClick={login} >Login</div>
                        </div>
                        {
                            loginError.length > 0 ? (
                                <div className="login-error-container">
                                    <p className="alert alert-danger"> {loginError}</p>
                                </div>
                            ) : null
                        }

                    </div>
                </div>
            </div>
        )
    }
}


export default UserLoginComponent