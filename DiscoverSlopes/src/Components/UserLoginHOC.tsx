import * as React from 'react';
import { NavigationBarComponent } from '../Components/NavigationBarComponent'
import UserLoginComponent  from '../Components/UserLoginComponent'

export class UserLoginHOC extends React.Component {
    render() {
        return (
            <div>
                <NavigationBarComponent />
                <UserLoginComponent loginError=""/>
            </div>
        )
    }
}

