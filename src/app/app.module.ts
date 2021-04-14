import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './AuthModule/login/login.component';
import { RegisterComponent } from './AuthModule/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    MovieDetailsComponent,
    CustomerComponent,
    LoginComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
