import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PostByUserComponent } from './post-by-user/post-by-user.component';


const routes: Routes = [
  { path: 'administrator', component: AdminPanelComponent},
  { path: 'posts/:userId', component: PostByUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AdminRoutingModule { }
