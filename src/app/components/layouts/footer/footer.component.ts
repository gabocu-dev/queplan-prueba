import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})

export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void { }

}
