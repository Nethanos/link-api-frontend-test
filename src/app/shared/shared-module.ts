import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkapiLogoComponent } from '../components/linkapi-logo/linkapi-logo.component';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';


const SharedComponents = [LinkapiLogoComponent, HeaderComponent]

@NgModule({
  declarations: SharedComponents,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: SharedComponents
})
export class SharedModule { }
