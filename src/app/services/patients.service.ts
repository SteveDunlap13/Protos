
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Subject } from '../models/index';
//import { Logger } from '../services/logger.service';
import { GROOTS } from '../shared/constants';


@Injectable()
export class PatientsService {

    private apiUrl = GROOTS.PATIENTSAPI;

    private options = new RequestOptions({
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    constructor(private http: Http) { }



    getPatients(): Observable<Subject[]> {

        return this.http.get(this.apiUrl, this.options)
                        .map(res => res.json().data)
                        .catch(this.handleError);
    }





    private handleError(error: any) {

        let errMsg = (error.message)
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : GROOTS.serverError;

        console.error(error);

        return Observable.throw(error);
    }
}

