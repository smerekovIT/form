import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionService } from './collection.service';
import { CollectionListComponent } from './collection-list/collection-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    CollectionListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
