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
    { id: 1, pvm: '2017-05-12', paikka: 'Roine', saa: 'Aurinkoinen', tn: 1, ts: 'itä', li: 22, lv: 19 },
    { id: 2, pvm: '2017-06-11', paikka: 'Saimaa', saa: 'Pilvinen', tn: 5, ts: 'etelä', li: 18, lv: 17 },
    { id: 3, pvm: '2017-06-11', paikka: 'Saimaa', saa: 'Pilvinen', tn: 4, ts: 'etelä', li: 19, lv: 17 }
  ];

  tuulensuunta: string[] = [
    null,
    'pohjoinen',
    'koillinen',
    'itä',
    'kaakko',
    'etelä',
    'lounas',
    'länsi',
    'luode'
  ];

  saatila: string[] = [
    null,
    'pilvinen',
    'puolipilvinen',
    'selkeä',
    'sadekuuroja',
    'sadetta',
    'kovaa sadetta',
    'ukkosta'
  ];

  trips: any[];

  constructor(private router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getTrips()
      .subscribe(data => this.trips = data);
  }

}
