import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.css']
})
export class DetailedWeatherComponent implements OnInit {
  @Input() day;
  @Output() deselect = new EventEmitter();
  imgUrl = environment.imgUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
