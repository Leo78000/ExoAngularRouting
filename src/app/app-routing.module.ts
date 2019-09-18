import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products/products.component';
import { ArticlesComponent } from './articles/articles/articles.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'privacy',        component: PrivacyComponent },
  { path: 'terms',        component: TermsComponent },
  { path: 'products', component:ProductsComponent},
  { path: 'articles', component:ArticlesComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
