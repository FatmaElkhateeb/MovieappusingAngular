import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './AuthModule/login/login.component';
import { RegisterComponent } from './AuthModule/register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
     path: "", component:MovieComponent 
  },
  {
    path: "movie/:id", component:MovieDetailsComponent
 },    

{​​​​​​​​path:"customer",component:CustomerComponent,canActivate:[AuthGuardGuard]},
{
  path:"Login",component:LoginComponent
},
{path:"register",component:RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
