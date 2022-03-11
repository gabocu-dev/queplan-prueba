import { Component, OnInit } from '@angular/core';
import { RequestsService } from "src/app/services/requests.service";
import { CharacterModel } from "src/app/models";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  charactersList: CharacterModel[] = [];
  viewTypeOptions: any[];
  viewType: string = 'list'
  paginationInfo = {};
  pageNumber: number = 1;

  constructor(private requests: RequestsService) { }

  ngOnInit(): void {
    this.viewTypeOptions = [
      { label: 'Lista', value: 'list', icon: 'pi pi-id-card' },
      { label: 'Tabla', value: 'table', icon: 'pi pi-table' },
    ];
    this.getCharacters(this.pageNumber);
  }

  getCharacters(page: number) {
    this.requests.getAllCharacters(page)
      .subscribe(res => {
        this.paginationInfo = res.info;
        this.charactersList = res.characters;
        console.table(res.characters)
      })
  }

}
