import * as React from 'react'

export class TestComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="container-user-profile">
                            <div class="container-user-profile-image">
                                <img id="UserProfilePicture" src="https://storagewms.blob.core.windows.net/profilepictures/IMG_20171230_102809.jpg" />
                            </div>
                            <div class="container-user-profile-name">
                                <p id="UserFirstName" className="user-profile-name">James</p>
                                <p id="UserLastName" className="user-profile-name">McGuire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
}