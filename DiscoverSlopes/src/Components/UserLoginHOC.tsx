import * as React from 'react';
import { NavigationBarComponent } from '../Components/NavigationBarComponent'
import { LoginComponent } from '../Components/LoginComponent'

export class UserLoginHOC extends React.Component {
    render() {
        return (
            <div>
                <NavigationBarComponent />
                <LoginComponent/>
            </div>
        )
    }
}

