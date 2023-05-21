import { Component ,OnInit} from '@angular/core';
import { WeatherService} from './services/weather.service';
import { WeatherData } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weatherapp';

  weatherdata?:WeatherData;
  constructor(private weatherService:WeatherService){}
  ngOnInit():void{
    this.getWeatherData(this.cityName);
  }
  cityName:string="Wellington";
  onSubmit(){ 
    this.getWeatherData(this.cityName);
  }
  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({next:(response)=>{
      this.weatherdata=response;
      console.log(response);}})
  }
  
}
