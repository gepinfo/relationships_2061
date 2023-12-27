import * as mongoose from 'mongoose';
import ticketsModel from '../models/daomodels/tickets';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class ticketsDao {
    private tickets = ticketsModel;
    constructor() { }
    
    public async GpDelete(ticketsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpDelete');

    

    
    
    
    this.tickets.findByIdAndRemove(ticketsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(ticketsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.tickets.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.tickets.findOneAndUpdate({ _id: ticketsData._id }, ticketsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpUpdate');

    

    
    
    
    this.tickets.findOneAndUpdate({ _id: ticketsData._id }, ticketsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(ticketsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetEntityById');

    

    
    
    
    this.tickets.findById(ticketsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetAllValues');

    

    
    
    
    this.tickets.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpCreate');

    let temp = new ticketsModel(ticketsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchRelationship(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpSearchRelationship');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(ticketsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.tickets.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpSearchRelationship');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.tickets.aggregate(([
                        { $match: { $and: [{ created_by: ticketsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}