import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainLayoutComponent
  ],
  exports: [MainLayoutComponent]  // Si necesitas exportarlo para otros módulos
})
export class LayoutsModule { }
