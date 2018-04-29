import { UserSignUpStoreState } from '../Types//UserSignUpStoreState'
import { SIGN_UP, TOGGLE_PASSWORD_REVEAL, RETURN_ERROR } from '../Constants/UserSignUpConstants';
import { UserSignUpAction } from '../Actions/UserSignUpActions';

export function UserSignUpReducer(state: UserSignUpStoreState, action: UserSignUpAction): UserSignUpStoreState {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state, signUpError: action.payload
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
        case RETURN_ERROR: {
            return {
                ...state, signUpError: action.payload
            }
        }
    }
    return state;
}