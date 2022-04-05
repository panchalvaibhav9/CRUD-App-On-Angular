import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  getData() {
    return  JSON.parse(localStorage.getItem("data")) || [];
  }

  deleteData(){
    localStorage.removeItem('data');
  }

  isAuthenticate(){
    return !!localStorage.getItem('token');
  }
}

