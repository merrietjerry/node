'use strict';
import "reflect-metadata";
import sampleManager from "./business/samplemanager";
import { Container} from "inversify";
import TYPES from "./containerType";
import isample from "./controller/isamplecontroller";
import sample from "./controller/samplecontroller";
import isampleManager from "./business/isampleManager";


const container = new Container();

//controller injuction
container.bind<isample>(TYPES.isample).to(sample);

//business injuction  
container.bind<isampleManager>(TYPES.isampleManager).to(sampleManager);

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
export default container;
