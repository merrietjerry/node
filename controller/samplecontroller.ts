'use strict';
import { Request, Response } from 'express';
import "reflect-metadata";
import { injectable, inject,named,interfaces } from "inversify";
import TYPES from "../containerType";
import isample from "../controller/isamplecontroller"
import isampleManager from "../business/isampleManager";
import containerconfig from "../containerconfig"

@injectable()
export default class sample implements isample
{

private _isampleManager : isampleManager;
constructor(@inject(TYPES.isampleManager) sampleManager:isampleManager) 
{
this._isampleManager = sampleManager;
//this._isampleManager = containerconfig.get<isampleManager>(TYPES.isampleManager);
}
public addNewContact(req: Request, res: Response): any{                
   try {
    //res.send("hello");
    console.log("controller");
    let config = containerconfig.get<isampleManager>(TYPES.isampleManager);
    res.send(config.GetData());
    //return "Hellllooooo!!!!!!!!!!!!!!!!!!!";
   } 
   catch(Exception)
   {
   }
}
}