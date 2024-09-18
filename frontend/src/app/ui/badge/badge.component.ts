import { Component, Input } from "@angular/core";
import { HlmBadgeDirective } from "@spartan-ng/ui-badge-helm";

export interface BadgeProps {
	text: string;
}

@Component({
	standalone: true,
	selector: "ui-badge",
	templateUrl: "./badge.component.html",
	imports: [HlmBadgeDirective],
})
export class BadgeComponent {
	@Input() props: BadgeProps = {
		text: "Badge",
	};
}
