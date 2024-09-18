import { Component } from "@angular/core";

import { HeroCardComponent } from "@components/card/card.component";

@Component({
	standalone: true,
	selector: "app-homepage",
	templateUrl: "./home.component.html",
	imports: [HeroCardComponent],
})
export class HomepageComponent {}
