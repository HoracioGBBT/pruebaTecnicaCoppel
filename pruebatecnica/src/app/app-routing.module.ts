import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './ui/layouts/main-layout/main-layout.component';


import { CoreModule } from './modules/core/infrastructure/modules/core.module';


const routes: Routes = [


  {
    path: '',
    canActivate: [],
    component: MainLayoutComponent,
    children: [

  
   
      //CORE ROUTES
      {
        path: 'core',
        loadChildren: () => CoreModule
      },
  


    ],

  },
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
