import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService, AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
