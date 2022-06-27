import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PracticeComponent } from './components/practice/practice.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/practice',
    pathMatch: 'full'
  },
  {
    path: 'kind',
    component: PracticeComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
