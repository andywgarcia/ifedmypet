import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2'; 
import 'firebase/storage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {  
  constructor(private firebaseApp: FirebaseApp) { 

  }

  ngOnInit() {
  }    

  getImageUrlForSchmitty(){
    return "https://firebasestorage.googleapis.com/v0/b/ifedmypet.appspot.com/o/images%2Fschmitty.JPG?alt=media&token=8e676570-d1c8-43d4-86b7-e81aa3c39b04";
  }
}
