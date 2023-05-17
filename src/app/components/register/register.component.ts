
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert(`Thank You For Registering Mr/Mrs ${username}. Please Login to get access to all our services.`);
        console.log(` Registered as ${username}`)
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
/* 
Code by Team A of Java3- 
Rohan, Vidisha, Yash, Kunal, Shivam, Anmol
*/