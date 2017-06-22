import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  ngOnInit() {
    // alert("onInit");
    var animationInterval;
    animationInterval = setInterval(function(){ 
      var website = document.getElementById("mainWebsite");
      website.classList.remove("website");
      website.classList.remove("website-transition");
      website.classList.add("website-no-opening");

      var logosmall = document.getElementById("logo-small");
      logosmall.classList.remove("logo-small-top-adjust");

      var parent = document.getElementById("animationContainer");
      var child = document.getElementById("openingAnimation");
      parent.removeChild(child);
      clearInterval(animationInterval);
    }, 23000);
  }

  public onSkipAnimation() {
    // alert("Event Emitted");
    var website = document.getElementById("mainWebsite");
    website.classList.remove("website");
    website.classList.remove("website-transition");
    website.classList.add("website-no-opening");

    var logosmall = document.getElementById("logo-small");
    logosmall.classList.remove("logo-small-top-adjust");

    var parent = document.getElementById("animationContainer");
    var child = document.getElementById("openingAnimation");
    parent.removeChild(child);
  }

  goToWebsite() {
      var website = document.getElementById("mainWebsite");
      website.classList.remove("website");
      website.classList.remove("website-transition");
      website.classList.add("website-no-opening");

      var logosmall = document.getElementById("logo-small");
      logosmall.classList.remove("logo-small-top-adjust");

      var parent = document.getElementById("animationContainer");
      var child = document.getElementById("openingAnimation");
      parent.removeChild(child);
  }

}
