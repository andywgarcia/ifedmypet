import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.scss']
})
export class PetlistComponent implements OnInit {
  petsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.petsObservable = this.getPets('/pets');
  }
  getPets(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getGenderPronoun(pet){
    if (pet.gender == 'boy'){
      return 'he';
    }
    return 'she';
  }
}