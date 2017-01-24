import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WireComponent } from './wire/wire.component';
import { SceneComponent } from './scene/scene.component';
import { NodeFactoryService } from './node-factory.service';
import { DraggableDirective } from './draggable.directive';
import { CaffeBuffetComponent } from './caffe-buffet/caffe-buffet.component';
import { PropertyWidgetComponent } from './property-widget/property-widget.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { PropertyGroupViewComponent } from './property-group-view/property-group-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,    
    NavbarComponent,
    WireComponent,
    SceneComponent,
    DraggableDirective,
    CaffeBuffetComponent,
    PropertyWidgetComponent,
    PropertyViewComponent,
    PropertyGroupViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule    
  ],
  providers: [
    NodeFactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
