import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ILogin } from '../shared/models/login.model';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}
    register(formValues: any) {
        console.log(formValues);
    }
    logIn(logins: ILogin): Observable<HttpResponse<any>> {
        return this.http.post('http://localhost:3000/api/auth/login', logins, { observe: 'response'}).pipe(map((res: { body: any; }) => {
            console.log(res.body);
            return res.body;
        }));
    }
}
