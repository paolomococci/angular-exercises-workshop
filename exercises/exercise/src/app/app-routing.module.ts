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
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: '**',
    redirectTo: '/practice',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
