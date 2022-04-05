import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { InteractionService } from 'app/interaction.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_records : any;

  signInForm = this.fb.group({
    'username' : new FormControl(''), 
    'password2'  : new FormControl('')
  })


  constructor(
    private fb: FormBuilder,
    private InteractionService : InteractionService,
    private router : Router) { }

  ngOnInit(): void {
    this.user_records = this.InteractionService.getData();
  }

  onSave(): void{
    console.log(this.signInForm.value.username);
    let Object;
    if( Object = this.user_records.find(o => o.email == this.signInForm.value.username && o.password1 == this.signInForm.value.password2)){
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', "APIAUTHORIZATIONSERVERPROVIDER");
      alert("Welcome to the Dashboard");
    }else{
    alert("Please enter the valid Details");
    

  }
  }
}
