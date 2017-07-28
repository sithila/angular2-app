import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-item.component';
//import { FooterComponent } from './footer.component';
import { CONST_ROUTING } from './app.routing';
import { ProductItemService } from './product-item.service';
import { ProductAddComponent } from './add-product.component';
import { lookupListToken, lookupLists } from './providers';
import { jsonComponent } from './json.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    ProductComponent,
    ProductItemComponent,
    ProductAddComponent,
    jsonComponent,
    //FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [
      ProductItemService,
       { provide: lookupListToken, useValue: lookupLists }

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
