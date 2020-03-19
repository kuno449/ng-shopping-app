import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './helper/auth.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
