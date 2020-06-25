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

  constructor() { }

  ngOnInit(): void {
  }

}
