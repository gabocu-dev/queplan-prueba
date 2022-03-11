import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from "src/app/models";

@Component({
  selector: 'character-preview',
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.sass']
})
export class CharacterPreviewComponent implements OnInit {
  @Input() characterInfo: CharacterModel;

  constructor() { }

  ngOnInit(): void {
  }

}
