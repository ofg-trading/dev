import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public onSkipAnimation() {
    alert("Event Emitted");
    var parent = document.getElementById("animationContainer");
    var child = document.getElementById("openingAnimation");
    parent.removeChild(child);
  }

}
