import { Request, Response } from 'express';
import {ticketsDao} from '../dao/ticketsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let tickets = new ticketsDao();

export class ticketsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpDelete')
     let  ticketsId = req.params.id;
     tickets.GpDelete(ticketsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpSearch')
     let  ticketsData = req.query;
     tickets.GpSearch(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpSearchForUpdate')
     let  ticketsData = req.body;
     tickets.GpSearchForUpdate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpUpdate')
     let  ticketsData = req.body;
     tickets.GpUpdate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetEntityById')
     let  ticketsId = req.params.id;
     tickets.GpGetEntityById(ticketsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetAllValues')
     
     tickets.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpCreate')
     let  ticketsData = req.body;
     tickets.GpCreate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpSearchRelationship')
     let  ticketsData = req.query;
     tickets.GpSearchRelationship(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpGetNounCreatedBy')
     let  ticketsData = { created_by: req.query.createdby };
     tickets.GpGetNounCreatedBy(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}