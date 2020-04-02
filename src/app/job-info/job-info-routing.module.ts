import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobInfoPage } from './job-info.page';

const routes: Routes = [
  {
    path: '',
    component: JobInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobInfoPageRoutingModule {}
