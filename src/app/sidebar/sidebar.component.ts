import { Component, OnInit, ViewChildren } from '@angular/core';
import path = require('path');
import { title } from 'process';
import { toUnicode } from 'punycode';

// @Component({
//   styleUrls: ['']
// })

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: any;
    id: string;
    childrens: any;
    
}
export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '', id: '#dashboard', childrens : []},

    { path: '/users', title: 'User', icon: 'pe-7s-user', class: '', id: '#user', childrens : [{ path: '/users/add-user', title: 'Add User', icon: 'pe-7s-add-user', class: '',},
    { path: '/users/users-list', title: 'User List', icon: 'pe-7s-users', class: '',}]},

    { path: '/customer', title: 'Customer', icon: 'pe-7s-smile', class: '', id: '#customer', childrens : [{ path: '/users/add-user', title: 'Add Customer', icon: 'pe-7s-add-user', class: '',},
    { path: '/users/users-list', title: 'Customer List', icon: 'pe-7s-users', class: '',}]},

    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro', id: '#upgrade', childrens : []},
    
    // { path: '/users/add-user', title: 'Add User', icon: 'pe-7s-add-user', class: '' },
    // { path: '/users/add-user', title: 'User List', icon: 'pe-7s-users', class: '' },
    // { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    // { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '', childrens : [] }
    // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  menuItems: any[];
  children: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  
  togglelist : boolean= false;

  clickevent(value){
    if(this.togglelist == value){
      this.togglelist = false;
    }
    else{
      this.togglelist = value;
      
    }
  }
}