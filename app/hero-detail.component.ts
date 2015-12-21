import {Hero} from './hero';
import {Component} from 'angular2/core';

@Component({
	selector: 'my-hero-detail',
	inputs: ['hero'],
	template: `
		<div *ngIf="hero">
			<h2>{{hero.name}} Details!</h2>
			<div><label>id:</label>{{hero.id}}</div>
			<div>
				<label>Name:</label>
				<input placeholder="name" [(ngModel)]="hero.name" />
			</div>
		</div>
	`
})

export class HeroDetailComponent{
	public hero: Hero;
}