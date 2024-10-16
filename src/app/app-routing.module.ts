import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"profile", component:ProfileComponent},
  {path:"login", component:LoginComponent},
  {path:"loadStudents", component:LoadStudentsComponent},
  {path:"loadPayments", component:LoadPaymentsComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"students", component:StudentsComponent},
  {path:"payments", component:PaymentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
