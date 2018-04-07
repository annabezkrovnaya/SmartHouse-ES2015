"use strict";

class Data {

   constructor(){

   this.channel1 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/ArdWL2uKf7k?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
   this.channel2 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/y2iEeCc2DZM?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
   this.channel3 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/iCEvHuVPgjs?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
   this.channel4 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/LMT1tajuyls?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
   this.channel5 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/UoKlKx-3FcA?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';

   this.type1 = new Type("ТВ", "img/icon-tv.png", "Здесь можно смотреть телевизионные передачи и любимые сериалы", "tv_set.html");
   this.type2 = new Type("Звук", "img/icon-sound.png", "Здесь можно послушать музыку или включить фоновый саунд", "sound.html");
   this.type3 = new Type("Кофе", "img/icon-coffee.png", "Множество сортов кофе на выбор к любому времени и настроению", "coffee.html");

   this.seriesList = [{name: "Доктор Кто", link: '<video width="560" height="315", controls="controls", autoplay="autoplay"><source src ="video/the_doctor.mp4"></video>'}, {name:"Шерлок", link: '<video width="560" height="315", controls="controls", autoplay="autoplay"><source src ="video/sher.mp4"></video>'}, {name:"Американские боги", link:'<video width="560" height="315", controls="controls", autoplay="autoplay"><source src ="video/amer_gods.mp4"></video>'}];

   this.channelList = [this.channel1, this.channel2, this.channel3, this.channel4, this.channel5];

   this.tv1 = new TvSet("Huge plasma", 3, 5, this.channelList, this.seriesList);
   this.tv2 = new TvSet("Itsy bitsy tv set", 2, 4, this.channelList, this.seriesList);

   this.programmList = [new Programm("Классический кофе", 2000, '<img src="img/coffee.png">'), new Programm("Капучино", 3000, '<img src="img/cappucсino.png">'), new Programm("Американо", 3000, '<img src="img/americano.png">'), new Programm("Кофе для двоих", 2000, '<img src="img/for_pair.png">'), new Programm("Арт Латте", 4000, '<img src="img/latte-art.png">')];

   this.coffee1 = new Coffee("Too Smart Coffee machine", this.programmList);

   this.musicList = [new Music("Heatens", "21 pilots", '<img src="img/music-1.png">', '<audio controls src="audio/21 pilots – heatens.mp3" autoplay="autoplay">'), new Music("Numb", "Linkin park", '<img src="img/music-2.png">', '<audio controls src="audio/Linkin park – Numb (оригинал).mp3" autoplay="autoplay">'), new Music("Immortals", "Fall Out Boy", '<img src="img/music-3.png">', '<audio controls src="audio/Fall Out Boy – Immortals.mp3" autoplay="autoplay">'), new Music("Roots", "Imagine Dragons", '<img src="img/music-4.png">', '<audio controls src="audio/Imagine_Dragons_Roots.mp3" autoplay="autoplay">'),
   new Music("Place in time", "Amanda Abizaid", '<img src="img/music-5.png">', '<audio controls src="audio/amanda-abizaid-place-in-time.mp3" autoplay="autoplay">')];

   this.emotionList = [new Emotion("Подъём", '<img src="img/emotion-1.png">', '<audio controls src="audio/wakeup.mp3" autoplay="autoplay">', "#fceaa3"), new Emotion("Энергия", '<img src="img/emotion-2.png">', '<audio controls src="audio/energy.mp3" autoplay="autoplay">', "#fbb897"), new Emotion("Грусть", '<img src="img/emotion-3.png">', '<audio controls src="audio/anguish.mp3" autoplay="autoplay">', "#dce9ef"), new Emotion("Мотивация", '<img src="img/emotion-4.png">', '<audio controls src="audio/motivation.mp3" autoplay="autoplay">', "#b0c7a6"),
   new Emotion("Комфорт", '<img src="img/emotion-6.png">', '<audio controls src="audio/comfort.mp3" autoplay="autoplay">', "#bdd8e8")];

   this.natureList = [{name:"Шум дождя", img:'<img src="img/nature-1.png">', sound:'<audio controls src="audio/shum_dozhdja.mp3" autoplay="autoplay">'}, {name:"Утро в лесу", img:'<img src="img/nature-2.png">', sound:'<audio controls src="audio/utro_v_lesu.mp3" autoplay="autoplay">'}, {name:"Соловей", img:'<img src="img/nature-3.png">', sound:'<audio controls src="audio/solovej.mp3" autoplay="autoplay">'}, {name:"Шум моря", img:'<img src="img/nature-4.png">', sound:'<audio controls src="audio/shum_morja.mp3" autoplay="autoplay">'}];

   this.sound1 = new Sound("Big home sound", this.emotionList, this.musicList, this.natureList);

   this.typeList = [this.type1, this.type2, this.type3];
   this.deviceList = [this.tv1, this.tv2, this.coffee1, this.sound1];
   this.sh = new Smart();
   this.sh.setTypeSet(this.typeList);
   this.sh.setDeviceSet(this.deviceList);
}

   static getSmart(){
      let smart = new Data();
      return smart.sh;
   }

   static setStorage(){
      let smart = new Data();
      let smart1 = smart.sh;
      let dev = smart1.getDeviceSet();
      for (var i = 0; i < dev.length; i++) {
         let serialDev = JSON.stringify(dev[i]);
         localStorage.setItem("device" + i, serialDev);
      }
   }
   static getStorage(){
      let array = [];
      for (var i = 0; i < localStorage.length; i++) {
         let returnDev = JSON.parse(localStorage.getItem("device" + i));
         array.push(returnDev);
      }
      return array;
   }


}
