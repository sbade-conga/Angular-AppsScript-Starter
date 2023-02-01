import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContractsComponent } from './contracts/contracts.component';
import { TemplatesComponent } from './templates/templates.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
	{ 
		path: '**', 
		component: HomeComponent,
		children: [
			{
				path: 'contracts', // child route path
				component: ContractsComponent, // child route component that the router renders
			},
			{
				path: 'templates',
				component: TemplatesComponent, // another child route component that the router renders
			},
			{
				path: 'logout',
				component: LogoutComponent, // another child route component that the router renders
			}
		]
	},
	{ 
		path: '', 
		component: HomeComponent,
		children: [
			{
				path: 'contracts', // child route path
				component: ContractsComponent, // child route component that the router renders
			},
			{
				path: 'templates',
				component: TemplatesComponent, // another child route component that the router renders
			},
			{
				path: 'logout',
				component: LogoutComponent, // another child route component that the router renders
			}
		]
	},
	{ 
		path: 'contracts', 
		component: ContractsComponent 
	},
	{ 
		path: 'templates', 
		component: TemplatesComponent 
	},
	{ 
		path: 'logout', 
		component: LogoutComponent 
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes,  { useHash: true, relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
