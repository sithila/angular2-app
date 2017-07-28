import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProductComponent } from "./product/product.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProductAddComponent } from "./add-product.component";
import { jsonComponent } from "./json.component";
const HEADER_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
     { path: 'product', component: ProductComponent },
      { path: 'add', component: ProductAddComponent },
     { path: 'json', component: jsonComponent },
    { path: 'profile', component: ProfileComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(HEADER_ROUTES);