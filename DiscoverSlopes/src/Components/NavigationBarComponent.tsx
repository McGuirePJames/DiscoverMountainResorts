import * as React from 'react'

export class NavigationBarComponent extends React.Component {
    render() {
        return (


            <nav className="navbar navbar-expand-lg navbar-light">
                <style dangerouslySetInnerHTML={{
                    __html: `
                        nav p {
                            margin-bottom: 0;
                            color: white !important;
                        }
                        
                        nav a {
                            color: white !important;
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
                                cursor: pointer;
                            }
                        
                                nav .container-user-profile .container-user-profile-name {
                                    height: inherit;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    flex-direction: column;
                                    margin-left: 10px;
                                }
                        
                                    nav .container-user-profile .container-user-profile-name .user-profile-name {
                                        font-size: 13pt;
                                        color: white;
                                        font-weight: 400;
                                    }
                        
                                        nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(1) {
                                            margin-bottom: 10px;
                                        }
                        
                                        nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(2) {
                                            margin-top: 10px;
                                        }
                        
                            nav #UserProfilePicture {
                                height: 50px;
                                width: 50px;
                                border-radius: 100%;
                            }

                            html nav.navbar-light .navbar-toggler-icon {
                                background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
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
                        <div className="container-user-profile">
                            <div className="container-user-profile-image">
                                <img id="UserProfilePicture" src="https://storagewms.blob.core.windows.net/profilepictures/IMG_20171230_102809.jpg" />
                            </div>
                            <div className="container-user-profile-name">
                                <p id="UserFirstName" className="user-profile-name">James</p>
                                <p id="UserLastName" className="user-profile-name">McGuire</p>
                            </div>
                        </div>
                    </span>
                </div>
            </nav>
        )
    }
}