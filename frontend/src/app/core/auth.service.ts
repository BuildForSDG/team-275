import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ILogin } from '../shared/models/login.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }
    register(formValues: any): Observable<any> {
        return this.http.post('/api/auth/register', formValues, {observe: 'response'});
    }
    logIn(logins: ILogin): Observable<any> {
        return this.http.post('/api/auth/login',
        logins, { observe: 'response' });
    }
}
