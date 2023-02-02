import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fileValidator } from '../validators/file-validator';

@Component({
  selector: 'app-page-edition-article',
  templateUrl: './page-edition-article.component.html',
  styleUrls: ['./page-edition-article.component.scss']
})
export class PageEditionArticleComponent {

  public formArticle: FormGroup = this.formBuilder.group(
    {
      "id": [null],
      "titre": ["", [Validators.required]],

      "auteur": ["", [Validators.maxLength(50)]],

      "contenu": ["", [Validators.required]],
      "image": [null, [fileValidator(["jpg", "png", "gif", "jpeg"])]]
    })

  constructor(
    private router: Router,
    private formBuilder: NonNullableFormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe({
      next: (parametres: any) => {
        //si il y a un parametre (cad si on est sur la page d'edition)

        if (parametres.id) {

          this.http.get("http://localhost:8080/article/" + parametres.id)
            .subscribe({
              next: article => this.formArticle.patchValue(article),
              error: (erreur: HttpErrorResponse) => console.log(erreur)
            })
        }
      }
    })
  }
  onSubmit(): void {

    if (this.formArticle.valid) {

      this.http.post("http://localhost:8080/article", this.formArticle.value)
        .subscribe({
          next: resultat => {
            alert("Le formulaire a été envoyé  ...")
            this.router.navigateByUrl("/accueil")
          },
          error: (resultat: HttpErrorResponse) => {
            if (resultat.status == 400) {
              alert("Un article porte déjà ce nom")
            }
            else {
              alert("Erreur inconnu")
            }
          }
        })
    }
  }

}
