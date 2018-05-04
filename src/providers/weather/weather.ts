import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  key ='662aac8bc5c5de1f';
  url;


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url ='http://api.wunderground.com/api/'+this.key+'/conditions/q/IE';
  }

    getWeather(city)
    {
      return this.http.get(this.url+'/'+city+'.json')
        //.map(res => res.json());
    }

}
