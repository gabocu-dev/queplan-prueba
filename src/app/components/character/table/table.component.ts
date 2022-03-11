import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from "src/app/models";

@Component({
  selector: 'characters-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input() charactersList: CharacterModel[];

  constructor() { }

  ngOnInit(): void { }

}
