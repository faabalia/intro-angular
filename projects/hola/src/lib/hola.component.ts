import { HolaService } from './hola.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hl-hola',
  template: `
    <p>
      hola works - Felix Angel Abalia ---222222222!
    </p>
  `,
  styles: []
})
export class HolaComponent implements OnInit {

  constructor(private h: HolaService) { }

  ngOnInit() {
  }

}
