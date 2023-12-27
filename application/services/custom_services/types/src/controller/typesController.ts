import { Request, Response } from 'express';
import { typesService } from '../service/typesService';
import { CustomLogger } from '../config/Logger'
let types = new typesService();

export class typesController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpCreate');
    })}
public GpSearchRelationship(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpSearchRelationship(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpSearchRelationship');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpSearchRelationship');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    types.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpGetNounCreatedBy');
    })}


}