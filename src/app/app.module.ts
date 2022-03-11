import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeuiModule } from "./primeui.module";
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/character/list/list.component';
import { CharacterPreviewComponent } from './components/shared/character-preview/character-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    CharacterPreviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
