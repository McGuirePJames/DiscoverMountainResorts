import * as React from 'react';
import  NavigationBarContainer  from '../Containers/NavigationBarContainer'
import UserLoginComponent  from '../Components/UserLoginComponent'

export class UserLoginHOC extends React.Component {
    render() {
        return (
            <div>
                <NavigationBarContainer />
                <UserLoginComponent loginError=""/>
            </div>
        )
    }
}

