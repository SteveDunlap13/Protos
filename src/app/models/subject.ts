
import { SubjectType, SubjectAddress, SubjectContact } from './index'



export interface Subject {

    id: number;
    type: SubjectType,

    firstName: string,
    middleName: string,
    lastName: string,
    sex: string,
    dateOfBirth: Date,
    healthCardNumber: string,

    address: SubjectAddress,
    contact: SubjectContact
}
