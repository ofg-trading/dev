import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images:string[] = ["assets/ofg-lion-w-logo.jpg",
                              "assets/ofg-person2-w-logo.jpg",
                              "assets/ofg-currency-gears-w-logo.jpg",
                              "assets/ofg-currency-w-logo.jpg",
                              "assets/ofg-sunrise-w-logo.jpg",
                              "assets/ofg-columns-light-w-logo.jpg",
                              "assets/ofg-flags-w-logo.jpg",
                              "assets/ofg-clock-w-logo.jpg",
                              "assets/ofg-columns-dark-w-logo.jpg",
                              "assets/ofg-person1-w-logo.jpg",
                              "assets/ofg-gold-bars-w-logo.jpg",
                              "assets/ofg-computers-w-logo.jpg"]


  constructor() { }

  ngOnInit() {
    let x: string = "test";
    x = "test2"
  }

}
