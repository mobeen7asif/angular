import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {PlacesComponent} from './places/places.component';
import {AuthGuardService} from './services/auth-guard.service';
import {PlaceDetailComponent} from './place-detail/place-detail.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'events', component: PlacesComponent, canActivate: [AuthGuardService], children: [
      {
        path: ':id', component: PlaceDetailComponent, canActivate: [AuthGuardService]
      }
    ]}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
