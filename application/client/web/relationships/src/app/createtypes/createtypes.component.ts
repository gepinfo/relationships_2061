import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatetypesService } from './createtypes.service';





@Component({
  selector: 'app-createtypes',
  templateUrl: './createtypes.component.html',
  styleUrls: ['./createtypes.component.scss'],
})

export class CreatetypesComponent implements OnInit {
    public types:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }




    constructor (
        private createtypesService: CreatetypesService,
    ) { }

    ngOnInit() {
        this.types.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.createtypesService.GpCreate(this.types).subscribe((data:any) => {
            this.types.name = ''
 	 	this.types.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}