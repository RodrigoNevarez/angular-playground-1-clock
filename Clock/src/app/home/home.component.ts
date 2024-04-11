import { Component } from '@angular/core';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  constructor(public clock: ClockService) {}
}
