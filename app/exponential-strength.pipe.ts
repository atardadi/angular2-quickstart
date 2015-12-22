import {Pipe} from 'angular2/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe {
	transform(value: number, args: string[]): any {
		return Math.pow(value, parseInt(args[0] || '1', 10));
	}
}
	
