import  UserSignUpComponent  from '../Components/UserSignUpComponent';
import * as Actions from '../Actions/UserSignUpActions';
import { UserSignUpStoreState } from '../Types/UserSignUpStoreState';
import { connect } from "react-redux"
import { Dispatch } from 'redux';

export function mapStateToProps({ signUpError, isPasswordRevealed }: UserSignUpStoreState) {
    return {
        signUpError,
        isPasswordRevealed,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<Actions.UserSignUpAction>) {
    //findThis
    return {
        revealPassword: () => dispatch(Actions.revealPassword()),
        signUp: () => dispatch(Actions.signUp())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUpComponent as any as React.SFC);

