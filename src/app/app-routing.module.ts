import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { InfoDetailsComponent } from "./components/character/info-details/info-details.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "character/information/:idCharacter",
    component: InfoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
