import { CurrentUserStoreState } from '../Types/CurrentUserStoreState'
import { LOGIN, TOGGLE_PASSWORD_REVEAL } from '../Constants/UserLoginConstants';
import { CurrentUserAction } from '../Actions/CurrentUserActions';
import { SET_CURRENT_USER, SIGN_OUT } from '../Constants/CurrentUserConstants';

export function UserReducer(state: CurrentUserStoreState, action: CurrentUserAction): CurrentUserStoreState {
    var test = "";
    switch (action.type) {
        case SET_CURRENT_USER: {
            var emailAddress = action.payload["email"];
            return {
                ...state,
                emailAddress: emailAddress
            }
        }
        case SIGN_OUT: {
            return {
                ...state,
                emailAddress: "",
                userProfileImageURL: ""
            }
        }

    }
    return state;
}