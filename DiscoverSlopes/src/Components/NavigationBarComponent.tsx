import * as React from 'react'

export class NavigationBarComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    html nav {
                        padding: 0 !important;
                        line-height: 0px;
                    }
                    
                        html nav p {
                            margin-bottom: 0;
                            font-family: Segoe UI !important;
                        }
                    
                        html nav .navbar-brand {
                            height: inherit;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: white;
                        }
                    
                    nav .container-navbar-brand {
                        display: flex;
                        height: 65px;
                        background-color: #05202B;
                        width: 100%;
                        align-items: center;
                        padding-left: 15px;
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
                    
                    nav .container-navbar-brand #UserProfilePicture {
                        height: 50px;
                        width: 50px;
                        border-radius: 100%;
                    }

                `}} />
                <div className="container-navbar-brand">
                    <a className="navbar-brand" href="#">DiscoverMountainResorts</a>
                    <div className="container-user-profile">
                        <div className="container-user-profile-image">
                            <img id="UserProfilePicture" src="https://storagewms.blob.core.windows.net/profilepictures/IMG_20171230_102809.jpg" />
                        </div>
                        <div className="container-user-profile-name">
                            <p id="UserFirstName" className="user-profile-name">James</p>
                            <p id="UserLastName" className="user-profile-name">McGuire</p>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                    </div>
                </div>
            </nav>
        )
    }
}