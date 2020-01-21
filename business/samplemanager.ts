'use strict';
import "reflect-metadata";
import { inject, injectable, named,interfaces } from "inversify";
import isampleManager from "../business/isampleManager";
import samplemodels from "../model/samplemodel";

@injectable()
export default class sampleManager implements isampleManager
{
    public GetData():any
    {
        console.log("business layer");
       let imp =  new samplemodels(1,"J");
        return imp;
    }
}