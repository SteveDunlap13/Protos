
import { Subject, SubjectType, SubjectAddress, SubjectContact } from '../index';
import { ADDRESSES } from './mock.subject.addresses';
import { CONTACTS } from './mock.subject.contacts';



function getRandomDate() {

    let from = new Date(2017, 1, 1, 0, 0, 0);
    let to = new Date(2017, 12, 31, 0, 0, 0);

    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}
function getRandomAddress(): SubjectAddress {

    return ADDRESSES[Math.floor(Math.random() * ADDRESSES.length)];
}
function getRandomContact(): SubjectContact {

    return CONTACTS[Math.floor(Math.random() * CONTACTS.length)];
}


export let PATIENTS: Subject[] = [

    { id: 1, type: SubjectType.PATIENT, firstName: 'Jason', middleName: 'David', lastName: 'Bourne', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '584-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 2, type: SubjectType.PATIENT, firstName: 'Jennifer', middleName: 'Jean', lastName: 'Walker', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '584-999-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 3, type: SubjectType.PATIENT, firstName: 'Anita', middleName: 'Jean', lastName: 'Walker', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '584-766-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 4, type: SubjectType.PATIENT, firstName: 'John', middleName: 'Alan', lastName: 'Doe', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '584-777-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 5, type: SubjectType.PATIENT, firstName: 'Latika', middleName: '', lastName: 'Yasmin', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '584-222-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 6, type: SubjectType.PATIENT, firstName: 'Adam', middleName: 'Roman', lastName: 'Sawyer', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '000-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 7, type: SubjectType.PATIENT, firstName: 'Brian', middleName: '', lastName: 'Adams', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '999-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 8, type: SubjectType.PATIENT, firstName: 'Trudy', middleName: 'Mary', lastName: 'Eve', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '888-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 9, type: SubjectType.PATIENT, firstName: 'Cristina', middleName: 'Janice', lastName: 'Saxophone', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '777-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 10, type: SubjectType.PATIENT, firstName: 'Kelly', middleName: 'Anne', lastName: 'Rogers', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '666-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 11, type: SubjectType.PATIENT, firstName: 'Tara', middleName: 'Riely', lastName: 'Toll-Dunlap', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '555-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 12, type: SubjectType.PATIENT, firstName: 'Peter', middleName: '', lastName: 'Dunn', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '444-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 13, type: SubjectType.PATIENT, firstName: 'Bob', middleName: 'Terry', lastName: 'Hither', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '333-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 14, type: SubjectType.PATIENT, firstName: 'Susan', middleName: 'Lisa', lastName: 'Defner', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '222-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
    { id: 15, type: SubjectType.PATIENT, firstName: 'Karen', middleName: 'Angela', lastName: 'Keyes', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '111-486-674-YM', address: getRandomAddress(), contact: getRandomContact() },
];


export let PHYSICIANS: Subject[] = [

    { id: 1, type: SubjectType.PHYSICIAN, firstName: 'Jeb', middleName: 'David', lastName: 'Bourne', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 2, type: SubjectType.PHYSICIAN, firstName: 'Gina', middleName: 'Jean', lastName: 'Walker', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 3, type: SubjectType.PHYSICIAN, firstName: 'Heather', middleName: 'Jean', lastName: 'Walker', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 4, type: SubjectType.PHYSICIAN, firstName: 'David', middleName: 'Alan', lastName: 'Doe', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 5, type: SubjectType.PHYSICIAN, firstName: 'Leanne', middleName: '', lastName: 'Yasmin', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 6, type: SubjectType.PHYSICIAN, firstName: 'Bob', middleName: 'Roman', lastName: 'Sawyer', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 7, type: SubjectType.PHYSICIAN, firstName: 'Steve', middleName: '', lastName: 'Adams', sex: 'M', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 8, type: SubjectType.PHYSICIAN, firstName: 'Ally', middleName: 'Mary', lastName: 'Eve', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 9, type: SubjectType.PHYSICIAN, firstName: 'Kathy', middleName: 'Janice', lastName: 'Saxophone', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() },
    { id: 10, type: SubjectType.PHYSICIAN, firstName: 'Princess', middleName: 'Anne', lastName: 'Rogers', sex: 'F', dateOfBirth: getRandomDate(), healthCardNumber: '', address: getRandomAddress(), contact: getRandomContact() }
];
