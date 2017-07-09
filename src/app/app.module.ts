import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetectedObjectFilterPipe } from './detected-object-filter.pipe';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DetcObjComponent } from './detc-obj/detc-obj.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const appRoutes: Routes =[
  { path: 'detectedObject', component: DetcObjComponent},
  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DetectedObjectFilterPipe,
    NavigationBarComponent,
    DetcObjComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
