import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
	catchPhrase: string;
	companyName: string;
	location: {
		lat: number;
		lng: number;
	};
	color: 'blue'

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `
		<div>
			<h2>Company ${this.companyName}</h2>
			<h4>${this.catchPhrase}</h4>
		</div>
		`;
	}
}
