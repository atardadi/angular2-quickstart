import {Component} from 'angular2/core';
import {HeroAsyncMessageComponent} from './hero-async-message.component';


@Component({
  selector: 'my-app',
  template: `<hero-message></hero-message>`,
  directives: [HeroAsyncMessageComponent]
})

export class AppComponent {

}