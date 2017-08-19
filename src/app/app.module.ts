import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccordianComponent } from './accordian/accordian.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { Content } from './app-data-types';
// import { AnimationTestComponent } from './animation-test/animation-test.component';
import { OpeningAnimationComponent } from './opening-animation/opening-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    CarouselComponent,
    TabsComponent,
    // AnimationTestComponent,
    OpeningAnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
