import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 1. Import directives

@Component({
	imports: [ RouterLink, RouterLinkActive ],
	selector: 'app-not-found-page',
	standalone: true,
	template: `
		<div class="not-found-page" style="padding:2rem;">
			<p style="padding:5rem 0; text-align:center">
				404 - nothing to see here.
			</p>
			<p style="text-align:center">
				<a
					routerLink="/"
					routerLinkActive="active-class"
					[routerLinkActiveOptions]="{exact: true}"
				>
					Go back to safety.
				</a>
			</p>
		</div>`
})
export class NotFoundPage {}
