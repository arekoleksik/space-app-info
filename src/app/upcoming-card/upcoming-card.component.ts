import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-card',
  templateUrl: './upcoming-card.component.html',
  styleUrls: ['./upcoming-card.component.css']
})
export class UpcomingCardComponent implements OnInit {
    @Input() launch: Object;
  constructor() { }

  ngOnInit() {
  }

}
