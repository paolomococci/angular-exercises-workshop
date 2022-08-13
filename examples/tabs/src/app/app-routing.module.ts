import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import { KindComponent } from './components/kind/kind.component'
import { KindBottomComponent } from './components/kind-bottom/kind-bottom.component'
import { KindSlowComponent } from './components/kind-slow/kind-slow.component'
import { KindIconComponent } from './components/kind-icon/kind-icon.component'

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
    path: 'kind-slow',
    component: KindSlowComponent
  },
  {
    path: 'kind-icon',
    component: KindIconComponent
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
