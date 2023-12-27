import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreatetypesService } from './createtypes.service';
import { SharedService } from '../../shared/shared.service';

describe('createtypesService', () => {
  let service: CreatetypesService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ CreatetypesService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(CreatetypesService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  // test case gp create
  it('should send a POST request to the server', () => {
    const types = { 
    name: 'name 1'
    description: 'description 1'
    }
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.GpCreate(types).subscribe(response => {
      expect(response).toEqual(types)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/types?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(types);

    // Flush the mocked response
    req.flush(types);
  });



  
});
