import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.css']
})
export class AnimationTestComponent implements OnInit {
  @Output() onSkipAnimation = new EventEmitter();

  constructor() { }

  ngOnInit() {

    var interval = setInterval(function(){ 
      var logoLg = document.getElementById("opening-logo-lg");
      logoLg.classList.remove("background-transition");
      logoLg.classList.add("logo-closing-transition");
      var logoMd = document.getElementById("opening-logo-md");
      logoMd.classList.remove("background-transition");
      logoMd.classList.add("logo-closing-transition");
      var logoXs = document.getElementById("opening-logo-xs");
      logoXs.classList.remove("background-transition");
      logoXs.classList.add("logo-closing-transition");
      clearInterval(interval);
    }, 1000);
  }

  public skipAnimation() {
    this.onSkipAnimation.emit();
  }
}
