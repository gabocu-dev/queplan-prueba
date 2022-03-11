import { CharacterModel } from "./character.model";

export interface CharacterResponseModel {
    info: {
        count: number;
        pages: number;
    };
    results: any[];
}