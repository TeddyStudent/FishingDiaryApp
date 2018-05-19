import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  // Example data for trips
  reissut: any[] = [
    { id: 1, pvm: '12-05-2017', paikka: 'Roine', saa: 'Aurinkoinen', tn: 1, ts: 'itä', li: 22, lv: 19 },
    { id: 2, pvm: '11-06-2017', paikka: 'Saimaa', saa: 'Pilvinen', tn: 5, ts: 'etelä', li: 18, lv: 17 },
    { id: 3, pvm: '11-06-2017', paikka: 'Saimaa', saa: 'Pilvinen', tn: 4, ts: 'etelä', li: 19, lv: 17 }
  ];

  users: any[];
  constructor(private router: Router, private _userService: DataService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(data => this.users = data);
  }

}
