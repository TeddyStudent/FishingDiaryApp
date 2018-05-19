import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IUser} from './user';
import { Observable} from 'rxjs';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  _url = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

}
