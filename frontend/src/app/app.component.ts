import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { LogotypeComponent } from "./components/logotype/logotype.component";
import { TextureComponent } from "./components/texture/texture.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, TextureComponent, LogotypeComponent],
	templateUrl: "./app.component.html",
})
export class AppComponent {
	title = "helpinho";
}
