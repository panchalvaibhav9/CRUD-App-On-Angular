import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'app/interaction.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  mydata : any;

  constructor(private service: InteractionService){
  }

  ngOnInit(){
    this.mydata = this.service.getData();
    console.log(this.mydata);
    // console.log(item.fname)
  }

  // trashevent(){
    // this.mydata = this.service.deleteData();
    // this.records.push(this.checkoutForm.value);
  // }

}
