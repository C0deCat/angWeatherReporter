import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { environment } from 'src/environments/environment';
import { GeodataService } from '../geodata.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  report:any;
  imgUrl = environment.imgUrl;
  constructor(public fc: ForecastService,
    private geo: GeodataService) {}

  ngOnInit(): void {
    this.geo.getCoords().then(pos => {
      this.fc.Update(pos.latitude, pos.longitude).subscribe((data) => {
        this.report = data;
      });
    });
  }

}
