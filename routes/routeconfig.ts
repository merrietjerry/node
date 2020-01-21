'use strict';
import  expressapp from "express";
//import { Container} from "inversify";
import  containerconfig from "../containerconfig";
 import sample from "../controller/samplecontroller";
import isampleManager from "../business/isampleManager";
import isample from "../controller/isamplecontroller";
import TYPES from "../containerType";

export default class routeconfig {
    //public container : Container = new Container()
    //public containerConfig : containerconfig = new containerconfig();
    //public samplecontrollers:sample = new sample(new sampleManager());
    constructor() {
        //this.containerConfig.containerRegistration(this.container);
        //this.containerConfig.containerResolver(this.container);
        console.log("route starts................")
    }

    public registerroute(router : expressapp.Router):void
    {
        //var sampleroute = this.container.get<isample>(TYPES.isample);
        // let businessapi = containerconfig.get<isampleManager>(TYPES.isampleManager);
        // let service = new sample(businessapi);
        //containerconfig.get<isampleManager>(TYPES.isampleManager);

         var sampleroute = containerconfig.get<isample>(TYPES.isample);
        router.get('/addNewContact',sampleroute.addNewContact);

       
    }
}