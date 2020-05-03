import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClientComponent} from './client/client.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'}, // esto es un redireccionador automatico a home
  {path: 'home', component: HomeComponent},
  {path: 'client', component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

