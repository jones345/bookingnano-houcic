
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from '../pages/aunthencation/login.component';
const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},
{
  path: '',
  component: LoginComponent
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}