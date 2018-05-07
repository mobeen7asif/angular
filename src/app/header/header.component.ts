import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public username = 'UserName';
  constructor(private usersService: UserService , private router: Router) {
    const check = localStorage.getItem('user');
    if (check != null && check !== '') {
      this.username = (JSON.parse(localStorage.getItem('user'))).name;
      alert(this.username);
    }
    this.usersService.username.subscribe(
        (name: string) => {
          this.username = name;
        }
      );
  }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem('user',null);
    this.username = 'UserName';
    alert(localStorage.getItem('user'));
    this.router.navigateByUrl('login');
  }

}
