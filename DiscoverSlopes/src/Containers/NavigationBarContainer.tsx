import { NavigationBarComponent }  from '../Components/NavigationBarComponent';
import * as Actions from '../Actions/CurrentUserActions';
import { CurrentUserStoreState } from '../Types/CurrentUserStoreState';
import { connect } from "react-redux"
import { Dispatch } from 'redux';
import { signOut } from '../Actions/CurrentUserActions';

export function mapStateToProps({ emailAddress, userProfileImageURL }: CurrentUserStoreState) {
    return {
        emailAddress,
        userProfileImageURL,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<Actions.CurrentUserAction> ) {
    return {
        getCurrentUserNew: () => dispatch(Actions.getCurrentUserNew()),
        signOut: () => dispatch(Actions.signOut())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBarComponent as any as React.SFC);

