import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import { KindComponent } from './components/kind/kind.component'
import { KindBottomComponent } from './components/kind-bottom/kind-bottom.component'

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
    path: 'kind-bottom',
    component: KindBottomComponent
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
