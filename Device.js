"use strict";
//main class for all devices connecting to smart house control system

class Device {

   constructor(type, name){
      this._type = type;
      this._name = name;
      this._currentState = 0;
   }

   getType(){
      return this._type;
   }

   setType(type){
      this._type = type;
   }

   getName(){
      return this._name;
   }

   setName(name){
      this._name = name;
   }

   getCurrentState(){
      return this._currentState;
   }

   switchON(){
      this._currentState = 1;
   }

   switchOFF(){
      this._currentState = 0;
   }

   timer(time){
      let mils = time * 1000;
      switch (this._currentState) {
         case 0:
            setTimeout(function(){device.switchON()}, mils);
            break;
         case 1:
            setTimeout(function(){device.switchOFF()}, mils);
            break;
      }
   }
}
