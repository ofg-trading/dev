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
  }

  skipAnimation() {
    // alert("skip pressed")
    this.onSkipAnimation.emit();
  }


}
