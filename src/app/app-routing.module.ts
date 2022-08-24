import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path:'', component: FirstComponentComponent},
  {path:'lista', component: ListRenderComponent},
  {path:'lista/:id', component: ItemDetailComponent},
  {path:'change', component: ChangeNumberComponent},
  {path:'directive', component: DirectivesComponent},
  {path:'emitter', component: EmitterComponent},
  {path:'eventos', component: EventosComponent},
  {path:'if', component: IfRenderComponent},
  {path:'parent', component: ParentDataComponent},
  {path:'pipes', component: PipesComponent},
  {path:'twoway', component: TwoWayBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
