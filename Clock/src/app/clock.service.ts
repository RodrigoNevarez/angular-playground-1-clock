import { Injectable, NgZone} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  tick = 0;

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.tick++;
        this.ngZone.run(() => { /* update the bindings */ });
      }, 1000);
    });
  }
}
