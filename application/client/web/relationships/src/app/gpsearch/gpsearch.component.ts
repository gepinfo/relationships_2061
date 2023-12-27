import { Component, OnInit, ViewChild } from '@angular/core';
import { GpsearchService } from './gpsearch.service';





@Component({
  selector: 'app-gpsearch',
  templateUrl: './gpsearch.component.html',
  styleUrls: ['./gpsearch.component.scss'],
})

export class GpsearchComponent implements OnInit {
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        types: '',
    }




    constructor (
        private gpsearchService: GpsearchService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.gpsearchService.GpCreate(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.types = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpSearchRelationship() {
        this.gpsearchService.GpSearchRelationship(this.tickets).subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}