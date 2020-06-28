import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Input } from '@angular/core';

@Component({
  selector: 'app-weeklyweather',
  templateUrl: './weeklyweather.component.html',
  styleUrls: ['./weeklyweather.component.css']
})
export class WeeklyweatherComponent implements OnInit {
  @Input() daily;
  imgUrl = environment.imgUrl;
  selectedDay: any;
  

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(day): void {
    this.selectedDay = day;
  }

  onDeselect(): void {
    this.selectedDay = null;
  }

}
