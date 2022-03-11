import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from "src/app/services/requests.service";

@Component({
  selector: 'info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.sass']
})
export class InfoDetailsComponent implements OnInit {
  idCharacter: string = '';

  constructor(private requests: RequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // this.idCharacter = params.idCharacter;
    });

    this.requests.getCharacterXid(5)
      .subscribe(res => {
        console.table(res)
      })
  }

}
