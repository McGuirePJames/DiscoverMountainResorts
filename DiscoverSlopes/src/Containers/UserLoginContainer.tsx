import  UserLoginComponent  from '../Components/UserLoginComponent';
import * as Actions from '../Actions/UserLoginActions';
import { UserLoginStoreState } from '../Types/UserLoginStoreState';
import { connect } from "react-redux"
import { Dispatch } from 'redux';

export function mapStateToProps({ loginError, isPasswordRevealed }: UserLoginStoreState) {
    return {
        loginError,
        isPasswordRevealed,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<Actions.UserLoginAction> ) {
    return {
        login: () => dispatch(Actions.loginAsync()),
        revealPassword: () => dispatch(Actions.revealPassword())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginComponent as any as React.SFC);

