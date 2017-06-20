import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public onSkipAnimation() {
    // alert("Event Emitted");
    var website = document.getElementById("mainWebsite");
    website.classList.remove("website");
    website.classList.remove("website-transition");
    var parent = document.getElementById("animationContainer");
    var child = document.getElementById("openingAnimation");
    parent.removeChild(child);
  }

}
