import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userForm = {
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPass: ''
  };


  constructor(private route: Router) { }

  ngOnInit(): void {
    // sessionStorage.clear();
  }

  register(obj: any) {
    if (obj.password.value === obj.confirmPass.value) {
      sessionStorage.setItem('username', obj.username.value);
      sessionStorage.setItem('password', obj.password.value);
      alert('Registration Successful.');
      this.route.navigate(['']);
    }
    else {
      alert('Password does not match Confirm Password')
    }

  }

}
