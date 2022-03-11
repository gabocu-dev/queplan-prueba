import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class connectionsService {
    constructor(private http: HttpClient){ }
	
	getRequest(url: string) {
		return this.http.get(environment.apiUrl+url)
	}

    postRequest(url: string, data: any) {
		return this.http.post(environment.apiUrl+url, data)
	}
}
