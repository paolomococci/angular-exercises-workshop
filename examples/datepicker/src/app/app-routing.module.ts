import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { KindComponent } from './components/kind/kind.component'
import { KindDateFilterValidationComponent } from './components/kind-date-filter-validation/kind-date-filter-validation.component'

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
    path: 'kind-date-filter-validation',
    component: KindDateFilterValidationComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
