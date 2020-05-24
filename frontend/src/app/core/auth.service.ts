import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ILogin } from '../shared/models/login.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private token: string;
    constructor(private http: HttpClient) { }
    register(formValues: any): Observable<any> {
        return this.http.post('/api/auth/register', formValues, {observe: 'response'});
    }
    logIn(logins: ILogin) {
        return this.http.post<{token: string}>('/api/auth/login',
        logins, { observe: 'response' }).subscribe(response => {
        const token = response.body.token;
        this.token = token;
        });
    }
    getToken() {
        return this.token;
    }
}
