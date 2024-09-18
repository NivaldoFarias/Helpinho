import { Component, Input } from "@angular/core";

import { BadgeComponent } from "@ui/badge/badge.component";

import type { BadgeProps } from "@ui/badge/badge.component";

export interface CardProps {
	user: {
		name: string;
		image: string;
		handle: string;
	};
	title: string;
	description: string;
	headerImage: string;
	badge: BadgeProps;
}

@Component({
	standalone: true,
	selector: "app-post-card",
	templateUrl: "./card.component.html",
	imports: [BadgeComponent],
})
export class HeroCardComponent {
	@Input() props: CardProps = {
		title: "Comprar um PS5",
		description: "Meu PS2 queimou e preciso comprar um novo, falta R$ 5000 pra comprar um novo...",
		user: {
			name: "Olivia Rhye",
			image: "images/avatar/olivia-rhye.webp",
			handle: "olivia@untitledui.com",
		},
		headerImage: "images/header/office.webp",
		badge: {
			text: "Games",
			colors: {
				background: "bg-Primary-100",
				text: "text-Primary-700",
			},
		},
	};
}
