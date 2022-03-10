import { Injectable } from '@angular/core';
import { connectionsService } from "./connections.service";

@Injectable({
    providedIn: 'root',
})

export class RequestsService {
    constructor(private conexion: connectionsService) { }

    getAllCharacters() {
        return this.conexion.getRequest('/character')
    }

    getCharacterXid(id: string) {
        return this.conexion.getRequest(`character/${id}`)
    }
}
