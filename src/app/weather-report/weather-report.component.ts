import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  report:any;
  imgUrl = environment.imgUrl;
  constructor(public fc: ForecastService) {}

  ngOnInit(): void {
    this.fc.Update().subscribe((data) => {
      this.report = data;
    });
  }

}
