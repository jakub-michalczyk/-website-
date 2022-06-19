import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactTabComponent } from './components/sidebar/tabs/contact-tab/contact-tab.component';
import { ExperienceTabComponent } from './components/sidebar/tabs/experience-tab/experience-tab.component';
import { ProjectsTabComponent } from './components/sidebar/tabs/projects-tab/projects-tab.component';
import { SocialsComponent } from './components/socials/socials.component';

const firebaseConfig = {
  apiKey: 'AIzaSyARDuhLXyTmpF3FkQL47pP1GuFAXbHbbWU',
  authDomain: 'jakub-michalczyk.firebaseapp.com',
  projectId: 'jakub-michalczyk',
  storageBucket: 'jakub-michalczyk.appspot.com',
  messagingSenderId: '234319138969',
  appId: '1:234319138969:web:ce3ce854bfd64cee71a808',
};

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SidebarComponent,
    ExperienceTabComponent,
    ProjectsTabComponent,
    ContactTabComponent,
    SocialsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
