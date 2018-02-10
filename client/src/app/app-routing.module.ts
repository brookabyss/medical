import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallComponent } from './call/call.component';
import { ShowComponent } from './show/show.component';
import { NewAccountComponent } from './new-account/new-account.component'


const routes: Routes = [
  {
    path: '',
    component: CallComponent
  },
  {
    path: 'accounts/show/user/:id',
    component: ShowComponent
  },
  {
    path: 'accounts/new',
    component: NewAccountComponent
  },
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }