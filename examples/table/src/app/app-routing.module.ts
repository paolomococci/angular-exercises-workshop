import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import { KindComponent } from './components/kind/kind.component'
import { KindStylizedComponent } from './components/kind-stylized/kind-stylized.component'
import { KindCrudComponent } from './components/kind-crud/kind-crud.component'
import { KindDynamicallyComponent } from './components/kind-dynamically/kind-dynamically.component'
import { KindObservableComponent } from './components/kind-observable/kind-observable.component'

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
    path: 'kind-stylized',
    component: KindStylizedComponent
  },
  {
    path: 'kind-crud',
    component: KindCrudComponent
  },
  {
    path: 'kind-dynamically',
    component: KindDynamicallyComponent
  },
  {
    path: 'kind-observable',
    component: KindObservableComponent
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
