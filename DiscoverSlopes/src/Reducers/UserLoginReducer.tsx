import { UserLoginStoreState } from '../Types/UserLoginStoreState'
import { LOGIN, TOGGLE_PASSWORD_REVEAL } from '../Constants/UserLoginConstants';
import { UserLoginAction } from '../Actions/UserLoginActions';

export function UserLoginReducer(state: UserLoginStoreState, action: UserLoginAction): UserLoginStoreState {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, loginError: action.payload
            }
        case TOGGLE_PASSWORD_REVEAL: {
            if (state.isPasswordRevealed) {
                return {
                    ...state, isPasswordRevealed: false
                }
            }
            return {
                ...state, isPasswordRevealed: true
            }
        }            
    }
    return state;
}