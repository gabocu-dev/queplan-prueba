import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from "src/app/models";
import { map, tap } from 'rxjs';

@Component({
  selector: 'characters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {
  @Input() charactersList: CharacterModel[];

  constructor() { }

  ngOnInit(): void { }

}
