import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from "src/app/services/requests.service";
import { CharacterModel } from "src/app/models";

@Component({
  selector: 'info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.sass']
})

export class InfoDetailsComponent implements OnInit {
  idCharacter: string = '';
  characterInfo: CharacterModel;

  constructor(private requests: RequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // this.idCharacter = params.idCharacter;
    });

    this.requests.getCharacterXid(5)
      .subscribe(res => {
        this.characterInfo = res
        console.log(res)
      })
  }

}
