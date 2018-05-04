import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  user: User;
   private username: any;
  constructor(private usersService: UserService, private router: Router) {
  }

  ngOnInit() {

  }
  register() {
    this.user = new User();
    this.user.name = this.signupForm.value.name;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.usersService.registerUser(this.user).subscribe(
      (response) => {
        console.log(response);
      },
      (errors) => console.log(errors)
    );
     // localStorage.setItem('user', JSON.stringify(this.response));
     // console.log(this.response);
     this.usersService.username.next(this.user.name);
    this.router.navigateByUrl('');
  }

}
