import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoplanetsListComponent } from './views/exoplanets-list/exoplanets-list.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
{
  path: "",
  pathMatch: "full",
  redirectTo: "home"
},
{
  path: "home",
  component: HomeComponent
},
{
  path: "exoplanetas",
  component: ExoplanetsListComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
