import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent implements OnInit {
  @Input() images:string[] = ["assets/ofg-bear.jpg",
                              "assets/ofg-bull.jpg",
                              "assets/ofg-lion-color.jpg"
                             ]


  constructor() { }

  ngOnInit() {
  }

}
