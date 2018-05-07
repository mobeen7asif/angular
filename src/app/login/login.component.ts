import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../models/User';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  user: User;
  constructor(private usersService: UserService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.user = new User();
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    this.usersService.loginUser(this.user).subscribe(
      (response: any) => {
        const user = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        this.usersService.username.next(user.name);
        this.router.navigateByUrl('');
      },
      (errors) => {
        if (errors.error.error.http_status === 404) {
          alert('Invalid Credentials');
        } else {
          alert('Something went wrongg with server'); }
      }
    );
  }



}
