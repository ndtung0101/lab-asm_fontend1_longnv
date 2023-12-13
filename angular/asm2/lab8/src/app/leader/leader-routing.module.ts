import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderComponent } from './leader.component';

import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvDetailComponent } from './nv-detail/nv-detail.component';

import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanDetailComponent } from './duan-detail/duan-detail.component';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskDatailComponent } from './task-datail/task-datail.component';
import { baoveGuard } from '../baove.guard';


const routes: Routes = [
  {path: 'nv', component: NvListComponent,canActivate:[baoveGuard]},
  {path: 'nv/:id', component: NvDetailComponent,canActivate:[baoveGuard]},
  {path: 'nvthem', component: NvThemComponent,canActivate:[baoveGuard]},
  {path: 'suanv/:id', component: NvSuaComponent,canActivate:[baoveGuard]},

  {path: 'duan', component: DuanListComponent,canActivate:[baoveGuard]},
  {path: 'duan/:id', component: DuanDetailComponent,canActivate:[baoveGuard]},
  {path: 'duanthem', component: DuanThemComponent,canActivate:[baoveGuard]},
  {path: 'suaduan/:id', component: DuanSuaComponent,canActivate:[baoveGuard]},

  {path: 'task', component: TaskListComponent,canActivate:[baoveGuard]},
  {path: 'task/:id', component: TaskDatailComponent,canActivate:[baoveGuard]},
  {path: 'taskthem', component: TaskThemComponent,canActivate:[baoveGuard]},
  {path: 'suatask/:id', component: TaskSuaComponent,canActivate:[baoveGuard]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }
