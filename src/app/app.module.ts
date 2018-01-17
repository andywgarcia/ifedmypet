/* Angular Libraries */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from './../environments/environment';

/* Bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

/* Components */
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PetlistComponent } from './petlist/petlist.component';
import { ErrorComponent } from './error/error.component';




const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'about', 
    component: AboutComponent,
    data: { 
      title: "About"
    } 
  },
  { 
    path: 'pets', 
    component: PetlistComponent,
    data: { 
      title: "My Pets"
    } 
  },
  {
    path: '**', 
    component: ErrorComponent,
    data: {
      title: "Error"
    } 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavBarComponent,
    PetlistComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

