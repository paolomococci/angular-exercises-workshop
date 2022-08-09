import { KindErrorComponent } from './components/kind-error/kind-error.component';
import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import {
  KindComponent
} from './components/kind/kind.component'

import {
  KindVerticalComponent
} from './components/kind-vertical/kind-vertical.component'

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
    path: 'kind-vertical',
    component: KindVerticalComponent
  },
  {
    path: 'kind-error',
    component: KindErrorComponent
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
