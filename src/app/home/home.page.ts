import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: number = 0;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getData().subscribe((data:string) => {
      this.data = Number.parseInt(data);
    });
  }}
