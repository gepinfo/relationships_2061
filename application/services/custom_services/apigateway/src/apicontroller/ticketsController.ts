import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class ticketsController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/tickets/:id', this.GpDelete);
this.router.get('/tickets/get/search', this.GpSearch);
this.router.put('/tickets/get/update', this.GpSearchForUpdate);
this.router.put('/tickets', this.GpUpdate);
this.router.get('/tickets/:id', this.GpGetEntityById);
this.router.get('/tickets', this.GpGetAllValues);
this.router.post('/tickets', this.GpCreate);
this.router.get('/tickets/userid/created_by', this.GpGetNounCreatedBy);
        this.router.get('/tickets/get/searchrelationship', this.GpSearchRelationship);
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
        //#@gepbankingapiroute@#
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpDelete');
        new ApiAdapter().delete(Constant.TICKETSURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpSearch');
        new ApiAdapter().get(Constant.TICKETSURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.TICKETSURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpUpdate');
        new ApiAdapter().put(Constant.TICKETSURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetEntityById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetEntityById');
        new ApiAdapter().get(Constant.TICKETSURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetEntityById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.TICKETSURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpCreate');
        new ApiAdapter().post(Constant.TICKETSURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.TICKETSURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) 
                                            {
                                                let response1:any;
                                                let response2:any;
                                                let finalresponse:any;
                                                let relURL = '/types/get/search?name=';                                                
                                                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpSearch');
                                                new ApiAdapter().get(Constant.TICKETSURL + `${req.url}`).then((res: any) => res.response.json()).then(result => 
                                                {
                                                  response1 = result;
                                                  new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpSearch');
                                                  new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpSearch');
                                                  new ApiAdapter().get(`${Constant.TYPESURL}`+`${relURL}`+`${response1[0].types}`).then((res: any) => res.response.json()).then(result => 
                                                  {
                                                    response2 = result;
                                                    finalresponse = 
                                                    {
                                                      "response1" : response1,
                                                      "response2" : response2
                                                    }
                                                    new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpSearch');
                                                    req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                    req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                  });
                                                }).catch(err => 
                                                   {
                                                    res.send(err);
                                                   });
                                            }

    //#@apifacebooklogin@#

    //#@apigithublogin@#

    //#@gepbankinglogin@#








}

