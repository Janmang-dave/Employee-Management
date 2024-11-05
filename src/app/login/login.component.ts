import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  loginForm = 
  {
    username : '',
    password : '',
  };

  signIn(obj: any)
  {
    if(obj)
    {
      let userName = sessionStorage.getItem('username');
      let pass = sessionStorage.getItem('password');
      if(userName === obj.username.value && pass === obj.password.value || userName==='admin' && pass ==='admin')
      {
        this.route.navigate(['list']);
      }
      else{
        alert('Username/Password is Wrong !!');
      }
    }
    else{
      alert('Login Failed !!');
    }
  }

  register()
  {
    sessionStorage.clear();
  } 
  

}
