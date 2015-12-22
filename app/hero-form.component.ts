import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';

@Component({
	selector: 'hero-form',
	templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent{
	powers = ['Smart','Flexible','Super Hot'];

	model = new Hero(18, 'Dr No!', this.powers[0], 'Chuck Overstreet');

	submitted = false;

	onSubmit() { this.submitted = true;}

	//TODO
	get diagnostic() { return JSON.stringify(this.model) };
}