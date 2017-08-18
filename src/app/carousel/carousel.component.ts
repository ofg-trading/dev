import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  // @Input() images:string[] = ["assets/screen-capture/ofg-lion-w-logo.jpg",
  //                             "assets/screen-capture/ofg-person2-w-logo.jpg",
  //                             "assets/screen-capture/ofg-currency-gears-w-logo.jpg",
  //                             "assets/screen-capture/ofg-currency-w-logo.jpg",
  //                             "assets/screen-capture/ofg-sunrise-w-logo.jpg",
  //                             "assets/screen-capture/ofg-columns-light-w-logo.jpg",
  //                             "assets/screen-capture/ofg-flags-w-logo.jpg",
  //                             "assets/screen-capture/ofg-clock-w-logo.jpg",
  //                             "assets/screen-capture/ofg-columns-dark-w-logo.jpg",
  //                             "assets/screen-capture/ofg-person1-w-logo.jpg",
  //                             "assets/screen-capture/ofg-gold-bars-w-logo.jpg",
  //                             "assets/screen-capture/ofg-computers-w-logo.jpg"]

  @Input() images:string[] = ["assets/original-artwork/Symbol43.jpg",
                              "assets/original-artwork/Symbol41.jpg",
                              "assets/original-artwork/Symbol39.jpg",
                              "assets/original-artwork/Symbol37.jpg",
                              "assets/original-artwork/Symbol35.jpg",
                              "assets/original-artwork/Symbol33.jpg",
                              "assets/original-artwork/Symbol31.jpg",
                              "assets/original-artwork/Symbol29.jpg",
                              "assets/original-artwork/Symbol27.jpg",
                              "assets/original-artwork/Symbol25.jpg",
                              "assets/original-artwork/Symbol23.jpg",
                              "assets/original-artwork/currencies.jpg"]


  constructor() { }

  ngOnInit() {
    let x: string = "test";
    x = "test2"
  }

}
