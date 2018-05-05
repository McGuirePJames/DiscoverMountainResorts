import * as React from 'react'
import * as $ from 'jquery'
import GetAntiForgeryToken from '../Misc/GetAntiForgeryToken'


export interface Props {
    emailAddress: string,
    userProfileImageURL: string,
    getCurrentUserNew: () => void,
    signOut: () => void,
}

export class NavigationBarComponent extends React.Component<Props, object> {
    constructor(props) {
        super(props)
        this.getCurrentUserF = this.getCurrentUserF.bind(this);
        this.authorizeUser = this.authorizeUser.bind(this);
    }
    getCurrentUserF() {
        $.ajax({
            beforeSend: () => {
                $('html').css('cursor', 'wait');
            },
            url: "/User/GetCurrentUser",
            type: "POST",
            data: GetAntiForgeryToken({}),
            success: function (response) {

            },
            complete: () => {
                $('html').css('cursor', 'default');
            }
        })
    }
    authorizeUser() {
        $.ajax({
            beforeSend: () => {
                $('html').css('cursor', 'wait');
            },
            url: "/User/AuthorizeCurrentUser",
            type: "POST",
            data: GetAntiForgeryToken({}),
            success: function (response) {

            },
            complete: () => {
                $('html').css('cursor', 'default');
            }
        })
    }
    componentDidMount() {
        this.props.getCurrentUserNew();
    }
    render() {
        const { emailAddress, userProfileImageURL, getCurrentUserNew, signOut } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <style dangerouslySetInnerHTML={{
                    __html: `
                        .sign-in-up-container .sign-in-container a:nth-child(1){
                            font-size: 12.5pt;   
                            font-weight: 400;
                        }
                        nav .navbar-text{
                            padding-top: 0;
                            padding-bottom: 0;
                        }
                        nav p {
                            margin-bottom: 0;
                            color: white !important;
                        }
                        
                        nav a {
                            color: white !important;
                        }
                        .navbar{
                            min-height: 40px;
                        }
                        nav {
                            line-height: 0px;
                            background-color: #05202B !important;
                            min-height: 60px;
                        }
                        
                            nav .container-user-profile {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: inherit;
                                margin-left: auto;
                                margin-right: 30px;
                            }
                        
                                nav .container-user-profile .container-user-profile-name {
                                    height: inherit;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    margin-left: 10px;
                                }
                        
                                    nav .container-user-profile .container-user-profile-name .user-profile-name {
                                        font-size: 13pt;
                                        color: white;
                                        font-weight: 400;
                                    }

                        
                                        nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(2) {
                                            margin-top: 10px;
                                        }
                            nav .container-user-profile-name{
                                display: flex;
                                align-items: center;
                                flex-direction: row;
                                height: 100% !important;
                            }
                            
                            nav .container-user-profile-name .fa-sign-out{
                                color: white;
                                margin-left: 10px;
                                display: flex;
                                align-items: center;
                                margin-top: 3px;
                                cursor: pointer;
                            }
                            nav #UserProfilePicture {
                                height: 50px;
                                width: 50px;
                                border-radius: 100%;
                            }
                            nav .sign-in-up-container{
                                display: flex;
                                align-items: center;
                                height: 100%;
                            }
                            nav .sign-in-up-container .separator{
                                width: 2px;
                                height: 20px;
                                margin-left: 10px;
                                margin-right: 10px;
                                background-color: rgba(184, 184, 184, 0.91)
                            }
                            html nav.navbar-light .navbar-toggler-icon {
                                background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
                            }
                            .navbar{
                                -webkit-box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);
                                -moz-box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);
                                box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);
                                z-index: 3;
                            }
                        `}} />
                <a className="navbar-brand" href="/">Discover Mountain Resorts</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    <span className="navbar-text">
                        {
                            this.props.emailAddress != "" && this.props.emailAddress != null ? (
                                <div className="container-user-profile">
                                    <div className="container-user-profile-image">
                                        <img id="UserProfilePicture" src="https://storagewms.blob.core.windows.net/profilepictures/IMG_20171230_102809.jpg" />
                                    </div>
                                    <div className="container-user-profile-name">
                                        <p id="UserFirstName" className="user-profile-name">{this.props.emailAddress}</p>
                                        <div>
                                            <i className="fa fa-sign-out" aria-hidden="true" onClick={signOut}></i>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    <div className="sign-in-up-container">
                                        <div className="sign-in-container">
                                            <a href="/User/Login">Sign In</a>
                                        </div>
                                        <div className="separator"> </div>
                                        <div className="sign-up-container">
                                            <a href="/User/SignUp">Sign Up</a>
                                        </div>
                                    </div>
                                )
                        }

                    </span>
                    {/*
                    <div>
                        <button type="button" onClick={this.signOutAsync}>Sign Out</button>
                    </div>
                    <div>
                        <button type="button" onClick={this.getCurrentUserF}>Get Current User</button>
                    </div>
                    <div>
                        <button type="button" onClick={this.authorizeUser}>Authorize User</button>
                    </div> */}
                </div>
            </nav>
        )
    }
}