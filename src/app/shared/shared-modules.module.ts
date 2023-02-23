import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { MatMaterialModule } from "./material.module";

@NgModule({
    exports: [
        CommonModule,
        MatMaterialModule,
        ReactiveFormsModule,
        CustomFormsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
    ],
})
export class SharedModulesModule { }
