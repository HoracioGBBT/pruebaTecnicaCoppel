import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BranchModule } from "../../../core/infrastructure/modules/branch/branch.module";
import { ReactiveFormsModule } from "@angular/forms";




@NgModule({
    imports: [
        BranchModule,
        HttpClientModule,
        ReactiveFormsModule,

    ]
})

export class CoreModule{}
