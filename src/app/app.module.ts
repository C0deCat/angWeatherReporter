import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeeklyweatherComponent } from './weeklyweather/weeklyweather.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { TemperaturePipe } from './temperature.pipe';
import { TimePipe } from './time.pipe';
import { PressurePipe } from './pressure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    AppheaderComponent,
    CurrentWeatherComponent,
    WeeklyweatherComponent,
    HourlyWeatherComponent,
    DetailedWeatherComponent,
    TemperaturePipe,
    TimePipe,
    PressurePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
