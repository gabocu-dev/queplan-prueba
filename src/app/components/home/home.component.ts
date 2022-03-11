import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  viewTypeOptions: any[];
  viewType: string = 'list'

  constructor() { }

  ngOnInit(): void {
    this.viewTypeOptions = [
      { label: 'Lista', value: 'list', icon: 'pi pi-id-card' },
      { label: 'Tabla', value: 'table', icon: 'pi pi-table' },
    ];
  }

  changeViewType(event: any) {
    console.log(event)
  }

}
