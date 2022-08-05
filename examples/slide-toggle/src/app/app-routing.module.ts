import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import {
  KindComponent
} from './components/kind/kind.component'

import {
  KindFormComponent
} from './components/kind-form/kind-form.component'

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
    path: 'kind-form',
    component: KindFormComponent
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
