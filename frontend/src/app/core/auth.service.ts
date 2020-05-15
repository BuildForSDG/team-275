import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ILogin } from '../shared/models/login.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }
    register(formValues: any) {
        console.log(formValues);
    }
    logIn(logins: ILogin): Observable<any> {
        return this.http.post('/api/auth/login',
        { email: logins.email, password: logins.password }, { observe: 'response' });
    }
}
