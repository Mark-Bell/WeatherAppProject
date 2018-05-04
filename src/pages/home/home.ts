import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather';

@Component({

    selector: 'page-home',
    templateUrl: 'home.html',
    

})
export class HomePage {

  weather:any;
  city:string;

  constructor(public navCtrl: NavController, private weatherprovider: WeatherProvider){

  }

  ionviewWillEnter(){
    this.city = 'Galway'

    this.weatherprovider.getWeather(this.city).subscribe(weather => {
      console.log(weather);})
  }

}