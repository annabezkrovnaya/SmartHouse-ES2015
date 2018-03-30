"use strict";

class Sound extends Device{

   constructor(name, emotionList, musicList, natureList){
      super("Звук", name);
      this._emotionList = emotionList;
      this._musicList = musicList;
      this._natureList = natureList;
   }

   getEmotionList(){
      return this._emotionList;
   }

   setEmotionList(emotionList){
      this._emotionList = emotionList;
   }

   getMusicList(){
      return this._musicList;
   }

   setMusicList(musicList){
      this._musicList = musicList;
   }

   getNatureList(){
      return this._natureList;
   }

   setNatureList(natureList){
      this._natureList = natureList;
   }
}


class Emotion {

   constructor (name, img, sound, background){
      this._name = name;
      this._img = img;
      this._sound = sound;
      this._background = background;
   }

   getName(){
      return this._name;
   }

   setName(name){
      this._name = name;
   }

   getImg(){
      return this._img;
   }

   setImg(img){
      this._img = img;
   }

   getSound(){
      return this._sound;
   }

   setSound(sound){
      this._sound = sound;
   }

   getBackground(){
      return this._background;
   }

   setBackground(background){
      this._background = background;
   }
}


class Music{

   constructor(title, group, image, composition){
      this._title = title;
      this._group = group;
      this._image = image;
      this._composition = composition;
   }

   getTitle(){
      return this._title;
   }

   setTitle(title){
      this._title = title;
   }

   getGroup(){
      return this._group;
   }

   setGroup(group){
      this._group = group;
   }

   getImage(){
      return this._image;
   }

   setImage(image){
      this._image = image;
   }

   getComposition(){
      return this._composition;
   }

   setComposition(composition){
      this._composition = composition;
   }
}
