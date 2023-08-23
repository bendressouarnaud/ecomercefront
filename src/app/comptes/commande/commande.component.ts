import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BeanArticleCommande } from 'src/app/mesbeans/beanarticlecommande';
import { BeanOngoingCommande } from 'src/app/mesbeans/beancommande';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  // Attributes :
  articlesForm: FormGroup;
  listeAttente: BeanOngoingCommande[];
  listeArticle: BeanArticleCommande[];
  getListeAttente = false;
  getCommande = false;


  // Methods :
  constructor(private meswebservices: MeswebservService, private fb: FormBuilder) {
    this.articlesForm = this.fb.group({
      articles: this.fb.array([this.initRows()]),
    });
  }

  ngOnInit(): void {
    this.getongoingcommande();
  }


  getongoingcommande(): void {
    this.meswebservices.getongoingcommande().toPromise()
      .then(
        resultat => {

          // Succes
          if (resultat.length > 0) {
            this.listeAttente = resultat;
            this.getListeAttente = true;
          }

          setTimeout(function () {
            $('#datatableAttente').DataTable({
              "pagingType": "full_numbers",
              "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
              ],
              responsive: true,
              language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
              },
              "order": [[4, "desc"]]
            });
          }, 500);

        },

      )
  }

  // Display 'COMMANDE' :
  affichercommande(dates: string, heure: string, idcli: number): void {
    let formData = new FormData();
    formData.append("dates", dates);
    formData.append("heure", heure);
    formData.append("idcli", idcli.toString());
    this.meswebservices.getongoingarticlesfromcommande(formData).toPromise()
      .then(
        resultat => {

          // Succes
          this.listeArticle = resultat;  
          
          this.articlesForm = this.fb.group({
            articles: this.fb.array([]),
          });

          // Browse this :
          resultat.forEach(
            d => {
              this.articlesArray.push(this.newArticle(d));              
            }
          );
          

          /*this.articlesArray.push(this.initRows());
          this.articlesArray.push(this.initRows());
          this.articlesArray.push(this.initRows());*/

          this.getCommande = true;
          // Display 'MODAL' :
          $('#modalupdate').modal();

        }

      )
  }


  get articlesArray() {
    return this.articlesForm.get('articles') as FormArray;
  }

  initRows() {
    return this.fb.group({
      lien: [''],
      libelle: [''],
      prix: [''],
      disponibilite: [''],
      total: [''],
      approuve: [12],
    });
  }

  // ARTICLE linked to COMMANDE
  newArticle(data : BeanArticleCommande) {
    return this.fb.group({
      lien: [data.lien],
      libelle: [data.libelle],
      prix: [data.prix],
      disponibilite: [data.disponibilite],
      total: [data.total],
      approuve: [0],
    });
  }

  // Add DYNAMICALLY :
  /*addSkills() {
    this.articlesArray.push(this.newArticle());
  }*/

  validerCommande(){
    // Browse :
    alert("Test : "+this.articlesArray.get('articles')[1].lien);
  }

}