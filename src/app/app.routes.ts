import { Routes } from '@angular/router';
import { HomePage } from './page/home/home';

export const routes: Routes = [{
	component: HomePage,
	path: ''
}, { 
	loadComponent: () => import(
		'./page/about/about'
	).then( m => m.AboutPage ),
    path: 'about' 
}, { 
    loadComponent: () => import(
		'./page/not-found/not-found'
	).then( m => m.NotFoundPage ),
    path: '**'
}];
