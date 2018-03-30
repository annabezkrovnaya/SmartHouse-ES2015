"use strict";

class TvSet extends Device{

   constructor(name, channelNum, volume, channelList, seriesList){
      super("ТВ", name);
      this._channelNum = channelNum;
      this._volume = volume;
      this._channelList = channelList;
      this._seriesList = seriesList;
      this._defaultChannel = this._channelList[0];
   }

   getChannelNum(){
      return this._channelNum;
   }

   setChannelNum(channelNum){
      this._channelNum = channelNum;
   }

   getDefaultChannel(){
      return this._defaultChannel;
   }

   setDefaultChannel(defaultChannel){
      this._defaultChannel = defaultChannel;
   }

   getVolume(){
      this._volume;
   }

   setVolume(volume){
      this._volume = volume;
   }

   getChannelList(){
      return this._channelList;
   }

   setChannelList(channelList){
      this._channelList = channelList;
   }

   getSeriesList(){
      return this._seriesList;
   }

   setSeriesList(volume){
      this._seriesList = seriesList;
   }

   switchON() {
      super.switchON(this);
      return this._defaultChannel;
   }

   switchOFF() {
      super.switchOFF(this);
   }

   timer(time) {
      super.timer(this);
   }

   lowVolume() {
      --this._volume;
   }

   riseVolume() {
      ++this._volume;
   }

   setChannel(channelNumber) {
      this._defaultChannel = channelNumber;
   }

   switchChannel(label) {
      switch (label) {
         case '+':
            ++this._defaultChannel;
            break;
         case '-':
            --this._defaultChannel;
            break;
         default: throw new SyntaxError("Wrong label. It can be only \'+\' or \'-\'");
      }
   }

   chooseSeries(title, serieNum) {
      for (let serie of this._seriesList) {
         if (this._seriesList[serie].getTitle === title && this._seriesList[serie].getSerieNum === serieNum) {
            return this._seriesList[serie].getSerieNum;
         }
      }
   }

   addSerieToViewed(title, serieNum) {
      for (let serie of this._seriesList) {
         if (this._seriesList[serie].getTitle === title && this._seriesList[serie].getSerieNum === serieNum) {
            this._seriesList[serie].setViewed(1);
         }
      }
   }

   playNextUnviewedSerie(title) {
      for (let serie of this._seriesList) {
         if (this._seriesList[serie].getTitle === title && this._seriesList[serie].getViewed === 0) {
            return this._seriesList[serie].getSerieNum;
         }
      }
   }
}
