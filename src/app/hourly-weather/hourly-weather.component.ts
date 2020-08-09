import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css']
})
export class HourlyWeatherComponent implements OnInit {
  public hours: any;
  @Input() 
  get hourly() { return this.hours; }
  set hourly(arr) { this.hours = arr.slice(0, 24); }

  imgUrl = environment.imgUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
