import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { HomeComponent } from './home/home.component';

import { DownloadComponent } from './download/download.component';
import { baoveGuard } from './baove.guard';
// import { NvDetailComponent } from './nv-detail/nv-detail.component';

const routes: Routes = [
  { path: '',component:HomeComponent },
  { path: 'dangnhap',component:DangnhapComponent },
  { path: 'dangky',component:DangkyComponent },
  { path: 'doipass',component:DoiPassComponent,canActivate:[baoveGuard] },
  { path: 'download',component:DownloadComponent,canActivate:[baoveGuard] },
  { path: 'leader', loadChildren: () => import('./leader/leader.module').then(m => m.LeaderModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }