import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HousesService } from './houses.service';
import { FormsModule } from '@angular/forms';
import { CityFilterPipe } from './city-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CityFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HousesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
