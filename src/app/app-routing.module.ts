import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistryUserComponent } from './components/registry-user/registry-user.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent, 
  },
  { 
    path: 'home',
    component: HomeComponent, 
    canActivate: [AuthGuard]
  },
  { 
    path: 'registry',
    component: RegistryUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
