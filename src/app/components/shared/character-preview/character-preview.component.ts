import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from "src/app/models";

@Component({
  selector: 'character-preview',
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.sass']
})
export class CharacterPreviewComponent implements OnInit {
  @Input() characterInfo: CharacterModel;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToInfo(id: number) {
    this.router.navigate([`/character/information/${id}`]);
  }

}
