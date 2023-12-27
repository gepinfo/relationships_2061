import * as mongoose from 'mongoose';
import typesModel from '../models/daomodels/types';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class typesDao {
    private types = typesModel;
    constructor() { }
    
    public async GpDelete(typesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpDelete');

    

    
    
    
    this.types.findByIdAndRemove(typesId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(typesData).forEach(
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
    this.types.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpSearchForUpdate');

    

    
    
    
    this.types.findOneAndUpdate({ _id: typesData._id }, typesData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpUpdate');

    

    
    
    
    this.types.findOneAndUpdate({ _id: typesData._id }, typesData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(typesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpGetEntityById');

    

    
    
    
    this.types.findById(typesId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpGetAllValues');

    

    
    
    
    this.types.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpCreate');

    let temp = new typesModel(typesData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchRelationship(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpSearchRelationship');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(typesData).forEach(
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
    this.types.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpSearchRelationship');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.types.aggregate(([
                        { $match: { $and: [{ created_by: typesData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}