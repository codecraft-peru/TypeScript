/// <reference path="InternalModules.ts" />

module Docking {
	import Ship = Shipping.Ship;
	export class Dock {
		private dockedShips: Ship[] = [];
		arrival(ship: Ship) {
			this.dockedShips.push(ship);
		}
	}
} 

var dock = new Docking.Dock();

module Transport.Maritime.Shipping { var privateVariable= 400;}
module Transport.Maritime.Docking {var privateVariable= 400;}
module Transport.Railways.Ticketing {var privateVariable= 400;}