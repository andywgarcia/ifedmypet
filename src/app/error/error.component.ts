import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {;
  constructor(private route: ActivatedRoute) { 
    
  }
  errors = {
    PageNotFound: 404
  }
  errorMessages = {
    404: "I cannot find the page you are looking for"
  }
  errorCode = this.errors.PageNotFound;  
  errorMessage = this.errorMessages[this.errorCode];
  ngOnInit() {
    this.setErrorCode();
  }
  

  setErrorCode(){
    var errorCode;
    this.route.params.subscribe(params => 
      errorCode = params.errorCode
    );
    if (errorCode === undefined){
      this.errorCode = this.errors.PageNotFound;
    }
    else {
      this.errorCode = errorCode;
    }
    if (this.errorMessages[this.errorCode] === undefined){
      this.errorMessage = "I have no idea what is wrong...";
    }
    else {
      this.errorMessage = this.errorMessages[this.errorCode];
    }
  }
  
}
