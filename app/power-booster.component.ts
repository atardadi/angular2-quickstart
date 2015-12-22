import {Component} from 'angular2/core';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';

@Component({
	selector: 'power-booster',
	template: `
		<h2>Power Booster</h2>
	 	<p>
			Super Power Booster: {{2 | exponentialStrength: 10}}
		</p>
	`,
	pipes: [ExponentialStrengthPipe]
})

export class PowerBooster {}