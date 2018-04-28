export interface UserLoginStoreState {
    loginError: string,
    isPasswordRevealed: boolean,
}

export class User {
    name: string
    password: string

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }
}
