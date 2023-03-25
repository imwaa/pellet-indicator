import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {}

  getData(): Observable<string> {
    return this.db.object<any>('distance').valueChanges();
  }
}
