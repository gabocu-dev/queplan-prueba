import { Component, OnInit } from '@angular/core';
import { RequestsService } from "src/app/services/requests.service";
import { CharacterModel } from "src/app/models";
import { map, tap } from 'rxjs';

@Component({
  selector: 'characters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {
  charactersList: CharacterModel[] = [];
  paginationInfo = {};
  pageNumber: number = 1;

  constructor(private requests: RequestsService) { }

  ngOnInit(): void {
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
