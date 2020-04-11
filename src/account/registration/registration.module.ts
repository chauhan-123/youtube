import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { Routes, RouterModule } from '@angular/router';

const registrationRoutes = [
  { path: '' , component:RegistrationComponent }
]


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(registrationRoutes)
  ]
})
export class RegistrationModule { }
