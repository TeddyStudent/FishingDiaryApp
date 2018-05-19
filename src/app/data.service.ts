import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private appUsers = new BehaviorSubject<any>(['User login needed!']);
  appUser = this.appUsers.asObservable();

  constructor() { }

  changeUser(appUser) {
    this.appUsers.value(appUser);
  }
}
