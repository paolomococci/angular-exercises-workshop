import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import {
  VarietyComponent
} from './components/variety/variety.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/variety',
    pathMatch: 'full'
  },
  {
    path: 'variety',
    component: VarietyComponent
  },
  {
    path: '**',
    redirectTo: '/variety',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
