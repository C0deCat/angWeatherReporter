import { Component, OnInit } from '@angular/core';
import { GeodataService } from '../geodata.service';

@Component({
  selector: 'app-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
  city: string;

  constructor(private geo:GeodataService) { }

  ngOnInit(): void {
    this.geo.getCity().then((obs) => {
      obs.subscribe((data:any) => {
        this.city = data.locality;
      })
    })
  }

}
