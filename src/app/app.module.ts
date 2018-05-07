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
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {LoaderInterceptor} from './interceptors/loader-interceptor.service';
import {AuthGuardService} from './services/auth-guard.service';
import { PlacesComponent } from './places/places.component';
import {PlaceService} from './services/place.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    PlacesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlimLoadingBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  } ,   AppService , UserService , AuthGuardService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
