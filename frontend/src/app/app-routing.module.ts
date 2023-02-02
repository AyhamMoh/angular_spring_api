import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageEditionArticleComponent } from './page-edition-article/page-edition-article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"accueil", component: PageAccueilComponent},
  {path:"contact", component: PageContactComponent},
  { path: "edition-article", component: PageEditionArticleComponent },
  { path: "edition-article/:id", component: PageEditionArticleComponent },
  { path: "", redirectTo: "accueil", pathMatch:"full" },
  { path: "**", component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
