import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  data: string = "";

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData().subscribe((data:string) => {
      this.data = data;
    });
  }}
