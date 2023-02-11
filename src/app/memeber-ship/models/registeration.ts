import { NativeEmailProviderData } from "app/memeber-ship/models/native-email-provider-data";
import { RegisterErrors } from "./register-errors";

export interface Registeration {
    registerWithFacebook: () => any,
    registerWithGoogle: () => any,
    registerWithNativeEmail: (Data: NativeEmailProviderData) => any,
    Error: RegisterErrors,
}
