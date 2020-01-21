'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const containerType_1 = __importDefault(require("../containerType"));
const containerconfig_1 = __importDefault(require("../containerconfig"));
let sample = class sample {
    constructor(sampleManager) {
        this._isampleManager = sampleManager;
        //this._isampleManager = containerconfig.get<isampleManager>(TYPES.isampleManager);
    }
    addNewContact(req, res) {
        try {
            //res.send("hello");
            console.log("controller");
            let config = containerconfig_1.default.get(containerType_1.default.isampleManager);
            res.send(config.GetData());
            //return "Hellllooooo!!!!!!!!!!!!!!!!!!!";
        }
        catch (Exception) {
        }
    }
};
sample = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(containerType_1.default.isampleManager)),
    __metadata("design:paramtypes", [Object])
], sample);
exports.default = sample;
//# sourceMappingURL=samplecontroller.js.map