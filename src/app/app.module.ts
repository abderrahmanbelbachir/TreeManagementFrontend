import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddNodeComponent } from './add-node/add-node.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateNodeComponent } from './update-node/update-node.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNodeComponent,
    UpdateNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddNodeComponent]
})
export class AppModule { }
