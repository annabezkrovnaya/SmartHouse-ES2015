"use strict";

class Type {

   constructor(title, img, description, url){
      this._title = title;
      this._img = img;
      this._description = description;
      this._url = url;
   }

   getTitle(){
      return this._title;
   }

   setTitle(title){
      this._title = title;
   }

   getImg(){
      return this._img;
   }

   setImg(img){
      this._img = img;
   }

   getDescription(){
      return this._description;
   }

   setDescription(description){
      this._description = description;
   }

   getUrl(){
      return this._url;
   }

   setUrl(url){
      this._url = url;
   }
}
