import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Beanapprobation } from 'src/app/mesbeans/beanapprobation';
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
  listeTraite: BeanOngoingCommande[];
  listeArticle: BeanArticleCommande[];
  getListeAttente = false;
  getListeTraite = false;
  getCommande = false;
  coutTotal = 0;
  //------
  dates: string;
  heure: string;
  idcli: number;
  titreAction = "";
  flagAction = 0;



  // Methods :
  constructor(private meswebservices: MeswebservService, private fb: FormBuilder) {
    this.articlesForm = this.fb.group({
      articles: this.fb.array([this.initRows()]),
    });
  }

  ngOnInit(): void {
    this.getongoingcommande();
    this.getProcessedCommande();
  }


  getongoingcommande(): void {
    let formadata = new FormData();
    formadata.append("traite", "0");
    this.meswebservices.getongoingcommande(formadata).toPromise()
      .then(
        resultat => {

          // Succes
          if (resultat.length > 0) {
            this.listeAttente = resultat;
          }

          //
          this.getListeAttente = true;

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



  getProcessedCommande(): void {
    let formadata = new FormData();
    formadata.append("traite", "1");
    this.meswebservices.getongoingcommande(formadata).toPromise()
      .then(
        resultat => {

          // Succes
          if (resultat.length > 0) {
            this.listeTraite = resultat;
          }

          //
          this.getListeTraite = true;

          setTimeout(function () {
            $('#datatabletraite').DataTable({
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
      idcde: [12],
    });
  }

  // ARTICLE linked to COMMANDE
  newArticle(data: BeanArticleCommande) {
    return this.fb.group({
      lien: [data.lien],
      libelle: [data.libelle],
      prix: [data.prix],
      disponibilite: [data.disponibilite],
      total: [data.total],
      approuve: data.total <= data.disponibilite ? [data.total] : [0],
      idcde: [data.idcde],
    });
  }

  // Add DYNAMICALLY :
  /*addSkills() {
    this.articlesArray.push(this.newArticle());
  }*/

  validerCommande() {
    // Browse :
    let data = Array() as Beanapprobation[];
    Object.keys(this.articlesArray.controls).forEach(key => {
      let tp = new Beanapprobation();
      tp.approbation = this.articlesArray.get(key).value['approuve'];
      tp.idcde = this.articlesArray.get(key).value['idcde'];
      data.push(tp);
    });

    // Now send this OBJECT :
    this.meswebservices.validatecommande(data).toPromise()
      .then(
        resultat => {
          if (resultat.element == "OK") {
            location.reload();
          }
          else {
            alert("Erreur de traitement !");
          }
        }
      )
  }


  // Display 'COMMANDE' :
  afficherArticleCommandeValide(dates: string, heure: string, idcli: number): void {
    let formData = new FormData();
    formData.append("dates", dates);
    formData.append("heure", heure);
    formData.append("idcli", idcli.toString());
    this.meswebservices.getvalidatedarticlesfromcommande(formData).toPromise()
      .then(
        resultat => {
          // Succes
          this.listeArticle = resultat;

          if (resultat.length > 0) {
            this.articlesForm = this.fb.group({
              articles: this.fb.array([]),
            });

            // Browse this :
            this.coutTotal = 0;
            resultat.forEach(
              d => {
                this.articlesArray.push(this.newArticle(d));
                this.coutTotal += (d.disponibilite * d.prix);
              }
            );

            this.getCommande = true;
            // Display 'MODAL' :
            $('#modalupdate').modal();
          }
        }
      )
  }


  // EMISSION COLIS :
  emissioncolis(dates: string, heure: string, idcli: number): void {
    this.dates = dates;
    this.heure = heure;
    this.idcli = idcli;
    this.titreAction = "Confirmer l'envoi de la commande";
    this.flagAction = 0;
    $('#modalAction').modal();
  }


  // COLIS LIVRE :
  colislivre(dates: string, heure: string, idcli: number): void {
    this.dates = dates;
    this.heure = heure;
    this.idcli = idcli;
    this.titreAction = "Confirmer la réception de la commande par le client";
    this.flagAction = 1;
    $('#modalAction').modal();
  }


  // Transmettre le COLIS :
  transmettreCommande(){
    let formData = new FormData();
    formData.append("dates", this.dates);
    formData.append("heure", this.heure);
    formData.append("idcli", this.idcli.toString());

    this.meswebservices.emissioncolis(formData).toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.element == "OK") {
            location.reload();
          }
        }
      );
  }


  // Confirmer la réception de la COMMANDE par le CLIENT :
  signalerlivraisonCommande(){
    let formData = new FormData();
    formData.append("dates", this.dates);
    formData.append("heure", this.heure);
    formData.append("idcli", this.idcli.toString());

    this.meswebservices.livraisonCommande(formData).toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.element == "OK") {
            location.reload();
          }
        }
      );
  }

}
