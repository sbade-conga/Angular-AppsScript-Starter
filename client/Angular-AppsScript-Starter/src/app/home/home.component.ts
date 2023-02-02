import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public pageHeader = "Welcome!";
	
	constructor(
		public router: Router
	) { }

	ngOnInit(): void {

	}

	public openContracts() {
		this.pageHeader = "Contracts";
		this.router.navigate(['/contracts']);
	}

	public openTemplates() {
		this.pageHeader = "Templates";
		this.router.navigate(['/templates']);
	}

	public logoutUser() {
		this.pageHeader = "Logout";
		this.router.navigate(['/logout']);
	}

	public login() {

	}

	public loginToSandbox() {
		
	}

}
