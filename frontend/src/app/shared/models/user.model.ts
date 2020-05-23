import { Moment } from 'moment';

export interface IUser {
    id?: number;
    login?: string;
    title?: string;
    gender?: string;
    firstName?: string;
    registerAs?: string;
    lastName?: string;
    email?: string;
    omang?: number;
    grossSalary?: number;
    maritalStatus?: string;
    dateOfBirth?: Moment;
    age?: number;
    imageUrl?: string;
    numberOfDependents?: number;
    numberOfChildren?: number;
    activated?: boolean;
    langKey?: string;
    createdDate?: Date;
    createdBy?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    authorities?: string[];
    termsAndCondition?: boolean;
    phoneNumber?: number;
    password?: string;
    confirmPassword?: string;
}
export class Account implements IUser {
    constructor(
        public id?: number,
        public login?: string,
        public title?: string,
        public gender?: string,
        public firstName?: string,
        public registerAs?: string,
        public lastName?: string,
        public email?: string,
        public omang?: number,
        public maritalStatus?: string,
        public dateOfBirth?: Moment,
        public age?: number,
        public imageUrl?: string,
        public numberOfDependents?: number,
        public numberOfChildren?: number,
        public activated?: boolean,
        public langKey?: string,
        public createdDate?: Date,
        public createdBy?: string,
        public lastModifiedBy?: string,
        public lastModifiedDate?: Date,
        public authorities?: string[]
    ) {}
}
