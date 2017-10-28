
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { PATIENTS, PHYSICIANS, ADDRESSES, CONTACTS } from '../models/index';


export class InMemoryApiService implements InMemoryDbService {

    createDb() {

        let patients = PATIENTS;
        let physicians = PHYSICIANS;
        let addresses = ADDRESSES;
        let contacts = CONTACTS;

        return { patients, physicians, addresses, contacts };
    }
}
