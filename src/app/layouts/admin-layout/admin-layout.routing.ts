import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UsersComponent } from '../../users/users.component';
import { AddUserComponent } from 'app/users/add-user/add-user.component';
import { UsersListComponent } from 'app/users/users-list/users-list.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { LoginComponent } from 'app/login/login.component'

export const AdminLayoutRoutes: Routes = [
    { path: 'login',          component:  LoginComponent},
    { path: 'dashboard',      component: HomeComponent,  },
    { path: 'users',          component: UsersComponent,  },
    { path: 'users/add-user', component: AddUserComponent,  },
    { path: 'users/users-list',component: UsersListComponent,  },
    { path: 'customer',       component: CustomerComponent,  },
];
