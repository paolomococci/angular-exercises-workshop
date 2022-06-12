import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { KindComponent } from './components/kind/kind.component'
import { KindDateFilterValidationComponent } from './components/kind-date-filter-validation/kind-date-filter-validation.component'
import { KindDateMinMaxValidationComponent } from './components/kind-date-min-max-validation/kind-date-min-max-validation.component'

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
  {
    path: 'kind-date-min-max-validation',
    component: KindDateMinMaxValidationComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
