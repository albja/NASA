import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'NASAS_API';
  constructor(public imgOfTheDay: NasaService) { }

  ngOnInit(): void {
    this.imgOfTheDay.getImageOfTheDay().subscribe(dailyImage => {
      this.imgOfTheDay = dailyImage.url;
    });
  }
}

