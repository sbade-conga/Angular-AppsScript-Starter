import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
	selector: 'app-templates',
	templateUrl: './templates.component.html',
	styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

	public templateName = "";
	public templates = [];
	public isPageLoading = false;
	
	constructor(private http: HttpClient) { }

	ngOnInit(): void {
	}

	public onKeyUp(event) {
		this.getTemplates();
	}

	public getTemplates() {
		this.isPageLoading = true;
		let payload = {
			"agreementId": "",
			"name": "",
			"type": "Agreement",
			"recordTypes": [],
			"isPlayBook": false,
			"category": "",
			"subCategory": "",
			"locale": "",
			"language": "",
			"size": 20,
			"offset": 0
		};

		let headers = new HttpHeaders();
		headers = headers.append('AuthToken', '00D2h00000010WT!AQMAQIEPHhkrKsy905zGQ8qRrS7wBZbDF.Fx3Csdc24g3z3zwVMw71IiEEqNL4m6joiHhMs4YQeOko1CSwl8opVecAlEuajm');
		headers = headers.append('InstanceUrl', 'https://keyurv1932--xa2functin.sandbox.my.salesforce.com');
		headers = headers.append('Origin', 'https://xajs-qa2.congacloud.io');
		headers = headers.append('OrgType', 'CLM');
		headers = headers.append('Accept', 'application/json');
		headers = headers.append('Content-Type', 'application/json');
		headers = headers.append('cache', 'false');
		headers = headers.append('IdeAPI', 'CCI');
		headers = headers.append('Cache-Control', 'no-cache, no-store, must-revalidate, post-check = 0, pre-check = 0');
		
		this.http.post<any>('https://xajs-qa2.congacloud.io/api/xajs/v1/xAuthor/Template/FindTemplates', payload, { headers }).subscribe(data => {
			this.templates = data['ResponseBody'];
			this.isPageLoading = false;
		})
	}

	public formatDate(date) {
		return moment(date).format('MMMM Do, YYYY');
	}

}
