import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../models/User';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

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
      (response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
      },
      (errors) => console.log(errors)
    );
    this.usersService.username.next(this.user.name);
    this.router.navigateByUrl('');
  }



}
