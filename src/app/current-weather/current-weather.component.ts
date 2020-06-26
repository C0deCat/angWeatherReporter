import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Input } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current;
  today: number;
  imgUrl = environment.imgUrl;
  constructor() { }

  ngOnInit(): void {
    this.today = this.current.dt;
  }

}
