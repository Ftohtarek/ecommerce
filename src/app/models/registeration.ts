import { NativeEmailProviderData } from "./native-email-provider-data";
import { RegisterErrors } from "./register-errors";

export interface Registeration {
    registerWithFacebook: () => any,
    registerWithGoogle: () => any,
    registerWithNativeEmail: (Data: NativeEmailProviderData) => any,
    Error: RegisterErrors,
}
