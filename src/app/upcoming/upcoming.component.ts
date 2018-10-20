import { Component, OnInit } from '@angular/core';
import { UpcomingService } from '../upcoming.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
    upcomingLaunch = {}
    getUpcomingLaunch() {
    this.upcomingService.getUpcomingLaunch().subscribe( res => {
this.upcomingLaunch = res
})
}  
  constructor(private upcomingService: UpcomingService) { }

  ngOnInit() {
    this.getUpcomingLaunch()  
  }

}
