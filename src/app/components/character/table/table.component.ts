import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from "src/app/models";

@Component({
  selector: 'characters-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {
  @Input() charactersList: CharacterModel[];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToInfo(id: number) {
    this.router.navigate([`/character/information/${id}`]);
  }

}
