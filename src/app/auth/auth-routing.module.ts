import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
