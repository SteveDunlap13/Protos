
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


const CONFIG_DEV = require('../../app.config.dev.json');
const CONFIG_PROD = require('../../app.config.prod.json');



@Injectable()
export class ConfigurationService {

    private config;

    constructor() {

        //console.log('process.env.ENV: ', process.env.ENV);
        if (process.env.ENV === 'production') {
            this.config = CONFIG_PROD;
        } else {
            this.config = CONFIG_DEV;
        }
    }

    get() {
        return this.config;
    }



    load(): Promise<any> {

        let promise = new Promise(resolve => setTimeout(resolve, 1));

        return promise;
    }




    public getProperty(property: string): any {

        if (!this.config) {
            throw new Error(`Attempted to access configuation property before
                                configuration data was loaded, please double check that 'APP_INITIALIZER is properly implemented.`
            );
        }

        if (!this.config[property]) {
            throw new Error(`Required property ${property} was not defined within the configuration object.
                                Please double check the assets/config.json file`);
        }

        return this.config[property];
    }
}
