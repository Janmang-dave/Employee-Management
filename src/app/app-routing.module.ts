import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [

      { path:'',component:LoginComponent},
      { path:'reg',component:RegistrationComponent},
      { path:'add',component:AddemployeeComponent},
      { path:'list',component:ShowemployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
