import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NtburgersBurgersComponent } from './ntburgers-burgers/ntburgers-burgers.component';
import { NtburgersAboutComponent } from './ntburgers-about/ntburgers-about.component';
import { NtburgersHomeComponent } from './ntburgers-home/ntburgers-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: NtburgersHomeComponent
  },
  {
    path: 'burgers',
    component: NtburgersBurgersComponent
  },
  {
    path: 'about',
    component: NtburgersAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
