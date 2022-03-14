import { CharacterModel } from "./character.model";

export interface PaginationInfoModel {
    count: number;
    pages: number;
}

export interface CharacterResponseModel {
    info: PaginationInfoModel;
    results: any[];
}