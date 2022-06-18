import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExperienceTabComponent } from './components/sidebar/tabs/experience-tab/experience-tab.component';
import { ProjectsTabComponent } from './components/sidebar/tabs/projects-tab/projects-tab.component';

@NgModule({
  declarations: [AppComponent, BackgroundComponent, SidebarComponent, ExperienceTabComponent, ProjectsTabComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
