import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-lauches',
  templateUrl: './lauches.component.html',
  styleUrls: ['./lauches.component.css']
})
export class LauchesComponent implements OnInit {
    latestLaunch = {}
    getLatestLaunch() {
    this.launchService.getLatestLaunch().subscribe( res => {
this.latestLaunch = res
})
}  
  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.getLatestLaunch()
  }

}
