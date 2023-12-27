import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CreatetypesService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(types:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.WEB_API + '/types' + `?jwt_token=${jwt_token}`, types);
    }
}