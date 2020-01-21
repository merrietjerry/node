'use strict';
import  express from "express";
import * as bodyParser from "body-parser";
import  routeconfig from "./routes/routeconfig";
import  containerconfig from "./containerconfig";
import "reflect-metadata";
import { Container} from "inversify";
class App {

    public app: express.Application;
    //public containerConfig : containerconfig = new containerconfig();
    public routeconfigroute: routeconfig = new routeconfig();
   
    constructor() {
        this.app = express();
        this.config(); 
        this.routeconfigroute.registerroute(this.app);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;