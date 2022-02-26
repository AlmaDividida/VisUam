import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VisualizadorPageComponent } from './pages/visualizador-page/visualizador-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home-page",
    pathMatch: 'full'
  },
  { path: 'home-page', component: HomePageComponent},
  { path: 'visualizador', component: VisualizadorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
