import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CselistComponent } from './components/cselist/cselist.component';
import { MelistComponent } from './components/melist/melist.component';
import { EcelistComponent } from './components/ecelist/ecelist.component';
const routes: Routes = [
  {path: 'cse',component: CselistComponent},
  {path: 'ece',component: EcelistComponent},
  {path: 'me' ,component: MelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
