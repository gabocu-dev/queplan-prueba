import { AfterContentInit, Component, OnInit } from '@angular/core';
import { RequestsService } from "src/app/services/requests.service";
import { CharacterModel, PaginationInfoModel } from "src/app/models";
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [MessageService]
})

export class HomeComponent implements OnInit {
  charactersList: CharacterModel[] = [];
  genderOptions: any[] = [];
  viewTypeOptions: any[] = [];
  viewType: string = 'list'
  paginationInfo: PaginationInfoModel;
  pageNumber: number = 1;
  textFilter: string = "";
  selectedFilter: any;
  isCheckedTxt: boolean = false;
  isCheckedGender: boolean = false;
  genderTypeFilter: string = "";
  pages: number = 0;
  totalCount: number = 0;

  constructor(
    private requests: RequestsService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.genderOptions = [
      { label: 'Male', value: 'male' }, 
      { label: 'Female', value: 'female' },
      { label: 'Genderless', value: 'genderless' },
      { label: 'Unknown', value: 'unknown' },
    ]
    this.viewTypeOptions = [
      { label: 'Lista', value: 'list', icon: 'pi pi-id-card' },
      { label: 'Tabla', value: 'table', icon: 'pi pi-table' },
    ];
    this.getCharacters(this.pageNumber);
    this.primengConfig.ripple = true;
  }

  ngAfterContentInit() {
    this.genderTypeFilter = this.genderOptions[0];
  }

  getCharacters(page: number) {
    this.requests.getAllCharacters(page)
      .subscribe(res => {
        this.pages = res.info.pages;
        this.totalCount = res.info.count;
        this.charactersList = res.characters;
      })
  }

  isGenderActivate(e: any) {
    this.genderTypeFilter = e.checked 
      ? "male"
      : ""
  }

  onFilter() {
    let queryTxt = "";
    if(this.isCheckedTxt) {
      this.textFilter != ""
        ? queryTxt = `name=${this.textFilter}`
        :  this.messageService.add({
            severity:'info',
            summary: 'Escucha, Morty, odio decirte esto...',
            detail: 'SI quieres buscar por nombre debes digital el texto en el campo',
            life: 3000
          })
    }
     
    this.isCheckedGender
      ? queryTxt = `${queryTxt}${queryTxt != "" ? "&" : ""}gender=${this.genderTypeFilter}`
      : ""

    this.requests.getFilteredCharacters(queryTxt)
      .subscribe(res => {
        this.paginationInfo = res.info;
        this.charactersList = res.characters;
      })
  }

  onChangePage(e: any) {
    const page = e.page+1;
    this.getCharacters(page)
  }
}
