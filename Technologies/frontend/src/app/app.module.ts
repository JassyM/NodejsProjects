import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [ // Se agregan los componentes que se crean
    AppComponent,
    TechnologyCardComponent,
    AboutComponent,
    TechnologiesComponent,
    TechnologyComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [ // Se agregan los módulos a usar
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], // Se agregan los archivos o servicios que se van a compartir con otros módulos
  bootstrap: [AppComponent]
})
export class AppModule { }
