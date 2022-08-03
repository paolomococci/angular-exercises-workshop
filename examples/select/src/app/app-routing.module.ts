import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import {
  KindComponent
} from './components/kind/kind.component'

import {
  KindDisabledComponent
 } from './components/kind-disabled/kind-disabled.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/kind',
    pathMatch: 'full'
  },
  {
    path: 'kind',
    component: KindComponent
  },
  {
    path: 'kind-disabled',
    component: KindDisabledComponent
  },
  {
    path: '**',
    redirectTo: '/kind',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
