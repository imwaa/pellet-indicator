import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: number = 0;
  gaugeLabel = "Pellets";
  gaugeSize = 300
  gaugleThick = 15;
  gaugeAppendText = "%";

  markerConfig = {
    "0": { color: 'red', size: 3, label: '0', type: 'line'},
    "25": { color: 'red', size: 3, label: '25', type: 'line'},
    "50": { color: 'orange', size: 3, label: '50', type: 'line'},
    "75": { color: 'green', size: 3, label: '75', type: 'line'},
    "100": { color: 'green', size: 3, label: '100', type: 'line'},
  }

  thresholdConfig = {
    '0': {color: 'red'},
    '40': {color: 'orange'},
    '50': {color: 'green'}
  };

  constructor(private firebaseService: FirebaseService) {}



  ngOnInit() {
    this.firebaseService.getData().subscribe((data:string) => {
      this.data = Number.parseInt(data);
    });
  }}
