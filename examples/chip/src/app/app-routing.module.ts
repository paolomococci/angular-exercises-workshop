import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { KindAutocompleteComponent } from './components/kind-autocomplete/kind-autocomplete.component'
import { KindAvatarComponent } from './components/kind-avatar/kind-avatar.component'
import { KindDndComponent } from './components/kind-dnd/kind-dnd.component'
import { KindComponent } from './components/kind/kind.component'

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
    path: 'kind-autocomplete',
    component: KindAutocompleteComponent
  },
  {
    path: 'kind-avatar',
    component: KindAvatarComponent
  },
  {
    path: 'kind-dnd',
    component: KindDndComponent
  },
  /*{
    path: 'kind-form-control',
    component:
  },
  {
    path: 'kind-input',
    component:
  },*/
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
