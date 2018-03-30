"use strict";
//main class for all devices connecting to smart house control system

class Smart {

   constructor(deviceSet, typeSet){
      this._deviceSet = deviceSet;
      this._typeSet = typeSet;
   }

   getDeviceSet(){
      return this._deviceSet;
   }

   setDeviceSet(deviceSet){
      this._deviceSet = deviceSet;
   }

   getTypeSet(){
      return this._typeSet;
   }

   setTypeSet(typeSet){
      this._typeSet = typeSet;
   }

   addDevice(device){
      this._deviceSet.push(device);
   }

   updateDevice(name, deviceNew){
      for (let i = 0; i < this._deviceSet.length; i++) {
         if(this._deviceSet[i]._name === name){
            this._deviceSet[i] = deviceNew;
         }
      }
   }

   deleteDevice(name){
      for (let i = 0; i < this._deviceSet.length; i++) {
         if (this._deviceSet[i]._name === name) {
            this._deviceSet.splice(i, 1);
         }
      }
   }

   getDevice(name){
      for (let item of this._deviceSet) {
         if (this._deviceSet[item]._name === name) {
            return this._deviceSet[item];
         }
      }
   }

   readDeviceSet(){
      this._deviceSet = this._deviceSet.sort();
      return this._deviceSet;
   }

   readSpecificDeviceSet (type){
      let typer = () => {
         return deviceSet._type == type;
      }
      let newSet = this._deviceSet.filter(typer);
      return newSet;
   }

   addType(type){
      let condition = (value) => {
         return value === type;
      }
      if(this._typeSet.some(condition) == false) this._typeSet.push(type);
      else throw new typeError("Такой тип уже существует");
   }

   deleteType(type){
      for(let i = 0; i < this._typeSet.length; i++){
         if(this._typeSet[i] === type) {
            this._typeSet.splice(i, 1);
         }
         else {
            throw new typeError("Такого типа ещё не существует");
         }
      }
   }
}
