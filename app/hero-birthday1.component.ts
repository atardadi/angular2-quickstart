import {Component} from 'angular2/core';

@Component({
	selector: 'hero-birthday',
	template: `<p>The Hero's B-day is {{birthday | date}}</p>`
})

export class HeroBirthday {
	birthday = new Date(1988, 3, 15);
}
