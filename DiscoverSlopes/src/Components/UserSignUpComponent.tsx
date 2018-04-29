import * as React from 'react'
import { Action } from 'redux';

export interface Props {
    signUpError?: string;
    isPasswordRevealed?: boolean;
    revealPassword?: () => void;
    signUp?: () => void;
}


export class UserSignUpComponent extends React.Component<Props, object> {
    render() {
        const { signUpError, isPasswordRevealed, revealPassword, signUp} = this.props

        return (
            <div id="UserSignUpComponent">
                <div id="UserSignUpComponentContainer" className="row">
                    <div className="left col-sm-12 col-md-5">
                        <p> Hello World </p>

                    </div>
                    <div className="right col-sm-12 col-md-7">
                        <div className="company-logo-name">
                            <div className="company-logo">
                                <img src="" />
                            </div>
                            <div className="company-name">
                                <p>Discover Mountain Resorts </p>
                            </div>
                        </div>
                        <div className="form-purpose">
                            <p>Sign Up</p>
                        </div>
                        <div className="form-data">
                            <div className="form-group form-group-username">
                                <label>Email Address</label>
                                <div className="input-group">
                                    <div className="icon-container icon-user">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Enter your email address" id="CreateUserUsername" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group form-group-password">
                                <label>Password</label>
                                <div className="input-group">
                                    <div className="icon-container icon-lock">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <input id="CreateUserPassword" placeholder="Password" type={isPasswordRevealed ? "text" : "password"} />
                                    </div>
                                    <div className="icon-container icon-eye">
                                        <i className="fa fa-eye" aria-hidden="true" onClick={revealPassword}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group form-group-password">
                                <label>Confirm Password</label>
                                <div className="input-group">
                                    <div className="icon-container icon-lock">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <input id="CreateUserConfirmPassword" placeholder="Repeat Password" type={isPasswordRevealed ? "text" : "password"} />
                                    </div>
                                    <div className="icon-container icon-eye">
                                        <i className="fa fa-eye" aria-hidden="true" onClick={revealPassword}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sign-up-button-container">
                            <div id="SignUp" onClick={signUp} >Sign Up</div>
                        </div>
                        {
                            signUpError.length > 0 ? (
                                <div className="sign-up-error-container">
                                    <p className="alert alert-danger"> {signUpError}</p>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default UserSignUpComponent;