import { ErrorHandler, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AppError } from "./app.error";

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor() { }
    handleError(error: AppError): void {}

}