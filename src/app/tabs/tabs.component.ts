import { Component, OnInit, Input } from '@angular/core';
import { Content } from "../app-data-types"
import { AppService } from "../app.service"

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [AppService]
})
export class TabsComponent implements OnInit {

  @Input() content: Content[] 

  constructor(private contentService: AppService) { }

  ngOnInit() {
    this.getContent();
  }

  getContent() {
    this.contentService.getContent().then(content => this.content = content);
  }
}
