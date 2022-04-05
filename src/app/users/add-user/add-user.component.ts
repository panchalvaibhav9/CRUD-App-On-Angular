import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from 'app/interaction.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})

export class AddUserComponent implements OnInit {

  listdata : any;
  records : any;
  mydata : any;
  private backbtnvisible : boolean;
  

  checkoutForm = this.formBuilder.group({
    'fname' : new FormControl('', [Validators.required,Validators.minLength(3)]),
    'lname': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'mobileno': new FormControl('', [Validators.required]),
    'password1': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  get f(){
    return this.checkoutForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private service: InteractionService,
    private router: Router
    ) {
    this.mydata = [];
    this.listdata = [];
  }

  ngOnInit(): void {   
    this.listdata = localStorage.getItem('data')
  }

  onSubmit(): void {

    alert("Your data has been entered successfully");
    this.records = JSON.parse(localStorage.getItem("data")) || [];
    this.records.push(this.checkoutForm.value);
    localStorage.setItem('data', JSON.stringify(this.records));
    if(this.router.url === '/registration'){
      this.router.navigate(['/login']);
    }
    else{
      console.log(this.records);
      this.checkoutForm.reset();

    }
  //   if(this.service.isAuthenticate()){
  //     this.checkoutForm.reset();
  //   }
  //   else{
  //     this.router.navigate(['/login']);
  //   } 
  }
}