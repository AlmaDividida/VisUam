import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VisualizadorPageComponent } from './pages/visualizador-page/visualizador-page.component';
import { SiteHeaderComponent } from './pages/home-page/site-header/site-header.component';
import { MainSectionComponent } from './pages/home-page/main-section/main-section.component';
import { BannerSectionComponent } from './pages/home-page/banner-section/banner-section.component';
import { GrupoTrabajoSectionComponent } from './pages/home-page/grupo-trabajo-section/grupo-trabajo-section.component';
import { TecnologiasSectionComponent } from './pages/home-page/tecnologias-section/tecnologias-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    VisualizadorPageComponent,
    SiteHeaderComponent,
    MainSectionComponent,
    BannerSectionComponent,
    GrupoTrabajoSectionComponent,
    TecnologiasSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
