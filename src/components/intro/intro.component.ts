import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntroComponent {

}
