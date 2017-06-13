import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images:string[] = ["assets/ofg-lion.jpg",
                              "assets/ofg-person2.jpg",
                              "assets/ofg-currency-gears.jpg",
                              "assets/ofg-currency.jpg",
                              "assets/ofg-sunrise.jpg",
                              "assets/ofg-columns-light.jpg",
                              "assets/ofg-flags.jpg",
                              "assets/ofg-clock.jpg",
                              "assets/ofg-columns-dark.jpg",
                              "assets/ofg-person1.jpg",
                              "assets/ofg-gold-bars.jpg",
                              "assets/ofg-computers.jpg"]


  constructor() { }

  ngOnInit() {
  }

}
