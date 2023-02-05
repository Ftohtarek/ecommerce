export interface Signin {

    signinWithFacebook: () => any,
    signinWithGoogle: () => any,
    signinWithEmail: (Data: any) => any,
    Error: any

}
