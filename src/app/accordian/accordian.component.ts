import { Component, OnInit, Input } from '@angular/core';
import { Content } from "../app-data-types"
import { AppService } from "../app.service"

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
  providers: [AppService]
})
export class AccordianComponent implements OnInit {

  @Input() content: Content[] 
  
  constructor(private contentService: AppService) { }

  ngOnInit() {
    this.getContent();
  }

  getContent() {
    this.contentService.getContent().then(content => this.content = content);
  }

}
