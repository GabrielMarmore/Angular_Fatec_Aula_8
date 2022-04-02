import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public ms: number;
  constructor(public timer: TimerService) {
    this.ms = 1000;
    this.timer.start(this.ms);
  }

  ngOnInit() {}
}
