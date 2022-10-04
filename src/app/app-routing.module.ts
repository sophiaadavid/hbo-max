import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInLayoutComponent } from './routing/sign-in-layout.component';
import { HomeLayoutComponent } from './routing/home-layout.component';
import { SignUpLayoutComponent } from './routing/sign-up-layout.component';
import { ViewPlansLayoutComponent } from './routing/view-plans-layout.component';
import { SeeDetailsLayoutComponent } from './routing/see-details-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Sign-in', component: SignInLayoutComponent},
  {path: 'Home', component: HomeLayoutComponent},
  {path: 'Sign-up', component: SignUpLayoutComponent},
  {path: 'View-plans', component: ViewPlansLayoutComponent},
  {path: 'See-details', component:SeeDetailsLayoutComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
