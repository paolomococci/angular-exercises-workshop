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
 import {
  KindErrorStateComponent
  } from './components/kind-error-state/kind-error-state.component'

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
    path: 'kind-error-state',
    component: KindErrorStateComponent
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
