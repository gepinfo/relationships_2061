import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class GpsearchService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(tickets:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.WEB_API + '/tickets' + `?jwt_token=${jwt_token}`, tickets);
    }
    GpSearchRelationship(tickets:any): Observable<any> {
        const temp:any = [];
 	 	const objectKeyPair = Object.entries(tickets);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + `/tickets/get/searchrelationship?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
    }
}