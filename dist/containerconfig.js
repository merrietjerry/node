'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const samplemanager_1 = __importDefault(require("./business/samplemanager"));
const inversify_1 = require("inversify");
const containerType_1 = __importDefault(require("./containerType"));
const samplecontroller_1 = __importDefault(require("./controller/samplecontroller"));
const container = new inversify_1.Container();
//controller injuction
container.bind(containerType_1.default.isample).to(samplecontroller_1.default);
//business injuction  
container.bind(containerType_1.default.isampleManager).to(samplemanager_1.default);
// export default class containerconfig
// {
//   public containerRegistration(myContainer: Container) : void
//   {
//     //controller injuction
//     myContainer.bind<isample>(TYPES.isample).to(sample);
//     //business injuction  
//     myContainer.bind<isampleManager>(TYPES.isampleManager).to(sampleManager);
//   }
// public containerResolver(myContainer: Container): any
// {
//   var resolver = myContainer.get<isampleManager>(TYPES.isampleManager);
//  return resolver;
// }
//}
exports.default = container;
//# sourceMappingURL=containerconfig.js.map