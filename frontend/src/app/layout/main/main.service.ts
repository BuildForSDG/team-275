import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MainService {
    private enabled = new BehaviorSubject<boolean>(false);
    public $enabled = this.enabled.asObservable();

    constructor() {}

    publishTopNavCondition(state: boolean) {
        this.enabled.next(state);
    }
}
