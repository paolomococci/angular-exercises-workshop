import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import { KindComponent } from './components/kind/kind.component'
import { KindAnimationComponent } from './components/kind-animation/kind-animation.component'
import { KindSlowlyComponent } from './components/kind-slowly/kind-slowly.component'
import { InjectorComponent } from './components/injector/injector.component'

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
    path: 'kind-animation',
    component: KindAnimationComponent
  },
  {
    path: 'kind-slowly',
    component: KindSlowlyComponent
  },
  {
    path: 'injector',
    component: InjectorComponent
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
