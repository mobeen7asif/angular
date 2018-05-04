import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../models/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  user: User;
  private response;
  constructor(private usersService: UserService) {

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
        this.response = response;
      },
      (errors) => console.log(errors)
    );

     localStorage.setItem('user', JSON.stringify(this.response));
  }

}
