import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
	selector: 'app-contracts',
	templateUrl: './contracts.component.html',
	styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

	public contractName = "";
	public contracts = [];
	public isPageLoading = false;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
	}

	public onKeyUp(event) {
		this.getContracts();
	}

	public getContracts() {
		this.isPageLoading = true;
		let payload = {"searchVal":this.contractName,"size":20,"offset":0};
		let headers = new HttpHeaders();
		headers = headers.append('AuthToken', '00D2h00000010WT!AQMAQC3ZS4kVHGyVMktziWwcWP0j9VBj3MrRbKeTS7QUpGw2K_ZIYzt5_zkl41L6aItEXvTls5BIAIBzjaNJZdP1vwZjqN8r');
		headers = headers.append('InstanceUrl', 'https://keyurv1932--xa2functin.sandbox.my.salesforce.com');
		// headers = headers.append('Origin', 'https://xajs-qa2.congacloud.io');
		headers = headers.append('OrgType', 'CLM');
		headers = headers.append('Accept', 'application/json');
		headers = headers.append('Content-Type', 'application/json');
		headers = headers.append('cache', 'false');
		headers = headers.append('IdeAPI', 'CCI');
		// headers = headers.append('Access-Control-Allow-Origin', '*');
		headers = headers.append('Cache-Control', 'no-cache, no-store, must-revalidate, post-check = 0, pre-check = 0');
		
		this.http.post<any>('https://xajs-qa2.congacloud.io/api/xajs/v1/xAuthor/Agreement/AgreementByKey', payload, { headers }).subscribe(data => {
			this.contracts = data['ResponseBody'];
			this.isPageLoading = false;
		})
	}

	public resize() {
		window.top.document.getElementsByClassName("script-application-sidebar")[0]['style'].width='500px';
	}

	public formatDate(date) {
		return moment(date).format('MMMM Do, YYYY');
	}
}
