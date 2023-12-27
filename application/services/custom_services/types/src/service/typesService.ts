import { Request, Response } from 'express';
import {typesDao} from '../dao/typesDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let types = new typesDao();

export class typesService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpDelete')
     let  typesId = req.params.id;
     types.GpDelete(typesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpSearch')
     let  typesData = req.query;
     types.GpSearch(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpSearchForUpdate')
     let  typesData = req.body;
     types.GpSearchForUpdate(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpUpdate')
     let  typesData = req.body;
     types.GpUpdate(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpGetEntityById')
     let  typesId = req.params.id;
     types.GpGetEntityById(typesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpGetAllValues')
     
     types.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpCreate')
     let  typesData = req.body;
     types.GpCreate(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpSearchRelationship')
     let  typesData = req.query;
     types.GpSearchRelationship(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GpGetNounCreatedBy')
     let  typesData = { created_by: req.query.createdby };
     types.GpGetNounCreatedBy(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}