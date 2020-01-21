'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Container} from "inversify";
const containerconfig_1 = __importDefault(require("../containerconfig"));
const containerType_1 = __importDefault(require("../containerType"));
class routeconfig {
    //public container : Container = new Container()
    //public containerConfig : containerconfig = new containerconfig();
    //public samplecontrollers:sample = new sample(new sampleManager());
    constructor() {
        //this.containerConfig.containerRegistration(this.container);
        //this.containerConfig.containerResolver(this.container);
        console.log("route starts................");
    }
    registerroute(router) {
        //var sampleroute = this.container.get<isample>(TYPES.isample);
        // let businessapi = containerconfig.get<isampleManager>(TYPES.isampleManager);
        // let service = new sample(businessapi);
        //containerconfig.get<isampleManager>(TYPES.isampleManager);
        var sampleroute = containerconfig_1.default.get(containerType_1.default.isample);
        router.get('/addNewContact', sampleroute.addNewContact);
    }
}
exports.default = routeconfig;
//# sourceMappingURL=routeconfig.js.map