import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myImg?: string
  title = 'NASAS_API';
  constructor(public imgOfTheDay: NasaService) { }

  ngOnInit(): void {
    this.imgOfTheDay.getImageOfTheDay().subscribe(dailyImage => {
      this.myImg = dailyImage.url;
    });
  }
}

