import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  city!: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather(getCityForm: any) {
    console.log(this.city);
    this.weatherService.getWeather(this.city);
    //   fetch(
    //     `https://api.weatherapi.com/v1/current.json?key=e45f4be218cb49259cf125320222201&q=${this.city}&aqi=no`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
  }
}
