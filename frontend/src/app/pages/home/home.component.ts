import { Component } from "@angular/core";
import { lucideCheck, lucideSearch } from "@ng-icons/lucide";
import { HlmFormFieldModule } from "@spartan-ng/ui-formfield-helm";
import { HlmIconComponent, provideIcons } from "@spartan-ng/ui-icon-helm";
import { HlmInputDirective } from "@spartan-ng/ui-input-helm";

import { HeroCardComponent } from "@components/card/card.component";
import { LogotypeComponent } from "@components/logotype/logotype.component";

@Component({
	standalone: true,
	selector: "app-homepage",
	templateUrl: "./home.component.html",
	providers: [provideIcons({ lucideCheck, lucideSearch })],
	imports: [
		HlmIconComponent,
		HlmInputDirective,
		HeroCardComponent,
		HlmFormFieldModule,
		LogotypeComponent,
	],
})
export class HomepageComponent {}
