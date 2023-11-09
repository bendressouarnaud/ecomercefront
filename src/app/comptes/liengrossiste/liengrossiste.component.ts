import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/mesbeans/article';
import { Grossiste } from 'src/app/mesbeans/grossiste';
import { Produits } from 'src/app/mesbeans/produits';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-liengrossiste',
  templateUrl: './liengrossiste.component.html',
  styleUrls: ['./liengrossiste.component.css']
})
export class LiengrossisteComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Article[];
  listeGrossiste: Grossiste[];
  listeproduit: Produits[];

  getData: boolean = false;
  getDataHisto: boolean = false;
  basicDatepicker = "";
  publication = new Date();
  id = "0";
  prix = "0";
  prixUdt = "0";
  idspr = 0;
  idgro = 0;
  idart = 0;
  idprod = 0;
  iddet = 0;
  libelle = "";
  libelleUpd = "";
  detail = "";
  libfichier = "";
  libmorefichier = "";
  alreadyInit = false;
  formData = new FormData();
  getDataSous = false;
  nombrearticle = 0;
  actif: Number =0;
  taille: Number =0;
  idprn = 0;
  //
  flagDetail = false;
  remplacerimage = false;
  authSwap = 0;



  // M e t h o d s :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getcompanyarticles();
    this.getAllGrossiste();
  }


  afficherDonnee(idnom: string, libelle: string, frequence: string, cds: string, jr:number) {
    this.id = idnom;
    this.libelle = libelle;
    $('#myModal').modal();
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.libelle = "";
    this.id = "0";
    this.prix = "0";
    // Reset this :
    this.formData = new FormData();
    $('#myModal').modal();
  }

  /* Get All Activities */
  getcompanyarticles(): void {
    this.meswebservices.getcompanyarticles().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.liste = resultat;
          }
        }
      )
  }

  /* Get All GROSSISTE */
  getAllGrossiste(): void {
    this.meswebservices.getAllGrossiste().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeGrossiste = resultat;
          }
        }
      )
  }


  // Save 
  enregistrer(): void {
    this.formData.append("id", this.id);
    this.formData.append("libelle", this.libelle);
    this.formData.append("prix", this.prix);
    // Dates :
    /*let momentVariable = moment(this.publication, 'MM-DD-YYYY');
    let dates = momentVariable.format('YYYY-MM-DD');
    this.formData.append("publication", dates);
    this.formData.append("detail", this.detail);
    this.formData.append("iddet", this.iddet.toString());
    this.meswebservices.enregistrerArticle(this.formData).toPromise().then(
      resultat => {
        if (resultat.element == "OK") {
          location.reload();
        }
        else{
          alert("Erreur de traitement !");
        }
      }
    )*/
  }


}
