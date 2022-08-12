import { NgModule } from '@angular/core'

import {
  RouterModule,
  Routes
} from '@angular/router'

import { KindComponent } from './components/kind/kind.component'

import { KindCrudComponent } from './components/kind-crud/kind-crud.component'
import { KindDynamicallyComponent } from './components/kind-dynamically/kind-dynamically.component'
import { KindExpandableComponent } from './components/kind-expandable/kind-expandable.component'
import { KindFilteringComponent } from './components/kind-filtering/kind-filtering.component'
import { KindFooterComponent } from './components/kind-footer/kind-footer.component'
import { KindMultipleComponent } from './components/kind-multiple/kind-multiple.component'
import { KindObservableComponent } from './components/kind-observable/kind-observable.component'
import { KindPaginationComponent } from './components/kind-pagination/kind-pagination.component'
import { KindRetrieverComponent } from './components/kind-retriever/kind-retriever.component'
import { KindSelectionComponent } from './components/kind-selection/kind-selection.component'
import { KindSortingComponent } from './components/kind-sorting/kind-sorting.component'
import { KindStylizedComponent } from './components/kind-stylized/kind-stylized.component'

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
    path: 'kind-crud',
    component: KindCrudComponent
  },
  {
    path: 'kind-dynamically',
    component: KindDynamicallyComponent
  },
  {
    path: 'kind-expandable',
    component: KindExpandableComponent
  },
  {
    path: 'kind-filtering',
    component: KindFilteringComponent
  },
  {
    path: 'kind-footer',
    component: KindFooterComponent
  },
  {
    path: 'kind-multiple',
    component: KindMultipleComponent
  },
  {
    path: 'kind-observable',
    component: KindObservableComponent
  },
  {
    path: 'kind-pagination',
    component: KindPaginationComponent
  },
  {
    path: 'kind-retriever',
    component: KindRetrieverComponent
  },
  {
    path: 'kind-selection',
    component: KindSelectionComponent
  },
  {
    path: 'kind-sorting',
    component: KindSortingComponent
  },
  {
    path: 'kind-stylized',
    component: KindStylizedComponent
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
