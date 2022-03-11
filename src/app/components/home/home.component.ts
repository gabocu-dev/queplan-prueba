import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  stateOptions: any[];

  constructor() {
    this.stateOptions = [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' },
    ];
   }

  ngOnInit(): void {

  }

}
