import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListBranchComponent } from "../../../../core/infrastructure/ui/core/branch/list/list-branch.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveBranchComponent } from "../../ui/core/branch/save/save-branch.component";



const routes: Routes = [
    {
      path:'branches',

      children:[
        {path:'',component: ListBranchComponent },        
      ]
    }
];

@NgModule({
    declarations:[


    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ListBranchComponent,
        SaveBranchComponent

    ],
    exports:[RouterModule],
    providers: []
})

export class BranchModule{}