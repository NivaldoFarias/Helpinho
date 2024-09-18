import { Component, Input } from "@angular/core";

export interface BadgeProps {
	text: string;
	colors?: {
		background?: string;
		text?: string;
	};
}

@Component({
	standalone: true,
	selector: "ui-badge",
	templateUrl: "./badge.component.html",
})
export class BadgeComponent {
	@Input() props: BadgeProps = {
		text: "Badge",
	};
}
