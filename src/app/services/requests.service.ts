import { Injectable } from '@angular/core';
import { connectionsService } from "./connections.service";
import { CharacterResponseModel } from "src/app/models";
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class RequestsService {
    constructor(private conexion: connectionsService) { }

    getAllCharacters(page: number) {
        return this.conexion.getRequest(`/character?page=${page}`).pipe(
            map(res => <CharacterResponseModel>res),
            map(res => ({
                    info: res.info,
                    characters: res.results.map(character => ({
                        ...character,
                        origin: character.origin.name,
                        location: character.location.name
                    }))
                })
            )
        )
    }

    getCharacterXid(id: number) {
        return this.conexion.getRequest(`character/${id}`)
    }
}
