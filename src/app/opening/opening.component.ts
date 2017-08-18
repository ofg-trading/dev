import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent implements OnInit {
  @Input() images:string[] = ["assets/screen-capture/ofg-bear.jpg",
                              "assets/screen-capture/ofg-bull.jpg",
                              "assets/screen-capture/ofg-lion-color.jpg"
                             ]


  constructor() { }

  ngOnInit() {
  }

}
