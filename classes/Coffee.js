"use strict";

class Coffee extends Device {

   constructor(name, programmList){
      super("Кофе", name);
      this._programmList = programmList;
   }

   getProgrammList(){
      return this._programmList;
   }

   setProgrammList(programmList){
      this._programmList = programmList;
   }
}

class Programm{

   constructor(title, time, img){
      this._title = title;
      this._time = time;
      this._img = img;
   }

   getTitle(){
      return this._title;
   }

   setTitle(title){
      this._title = title;
   }

   getTime(){
      return this._time;
   }

   setTime(time){
      this._time = time;
   }

   getImg(){
      return this._img;
   }

   setPictureURL(img){
      this._img = img;
   }
}
