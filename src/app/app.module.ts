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
import { TableComponent } from './components/character/table/table.component';
import { CharacterPreviewComponent } from './components/shared/character-preview/character-preview.component';
import { InfoDetailsComponent } from './components/character/info-details/info-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    TableComponent,
    CharacterPreviewComponent,
    InfoDetailsComponent
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
