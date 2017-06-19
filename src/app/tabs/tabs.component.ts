import { Component, OnInit, Input } from '@angular/core';
import { Content } from "../app-data-types"

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() content: Content[] = [
    { title: "Welcome", text: "Welcome to the OFG Trading, LLC website.  Please feel free to browse each page on our site as an introduction to our company."},
    { title: "Code of Ethics", text: "Here at OFG Trading, LLC, old fashion honesty, integrity and a strong work ethic are the foundation of our company.  We are dedicated to a relentless quest to be one of the premier Trading Companies in the world as defined by the Return on Investment that we produce."},
    { title: "Company Profile", text: "OFG Trading, LLC was founded in January of 2004 by a core group of conservative businessmen for two specific purposes. The first purpose was to take advantage of the leverage offered by more complex trading instruments and strategies to generate capital for specific philanthropic endeavors.  The second was to use these same instruments to generate a return on investment  for those who hold an interest in OFG that many brokers or money managers were unable to produce."},
    { title: "Investments", text: "OFG Trading, LLC is a privately owned, closely held, trading entity.  As such, OFG is fully funded by its current Members, is self-contained and there are no Investment opportunities of any kind available.  OFG Trading, LLC is registered with the National Futures Association as a 4.13(a)(2)exempt commodity pool."},
    { title: "Strategies", text: "OFG uses a number of proprietary stategies that we have developed and documented over many years of research.  These strategies are currently being used on a number of live accounts in a variety of markets with both manual and computer generated trade executions."},
    { title: "Our Team", text: "We are very excited and proud of the team that we have assembled for our various projects.  The diverse backgrounds of our Members, Affiliates and Associates consists of Multiple Business Owners and Developers, Analysts, Strategists, a Licensed Broker as well as wo of the top Financial Software Programmers in the industry.  Specific biographical information is being compiled for each of our Professionals."},
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
