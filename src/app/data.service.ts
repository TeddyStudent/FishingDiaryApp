import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';
import { ITrip } from './trip';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _userUrl = 'http://localhost:3000/api/user';
  _tripUrl = 'http://localhost:3000/api/trip';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._userUrl);
  }

  getTrips(): Observable<ITrip[]> {
    return this.http.get<ITrip[]>(this._tripUrl);
  }

}
