import { Component, OnInit } from '@angular/core';
import { Nomenclature } from 'src/app/mesbeans/nomenclature';
import { Periode } from 'src/app/mesbeans/periode';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';
import { Article } from 'src/app/mesbeans/article';
import { Beansousproduit } from 'src/app/mesbeans/beansousproduit';
import * as moment from 'moment';
import { Produits } from 'src/app/mesbeans/produits';
import { Detail } from 'src/app/mesbeans/detail';
import { Beanpromotion } from 'src/app/mesbeans/beanpromotion';

declare const $: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Article[];
  listesousproduit: Beansousproduit[];
  tamponSousProduit: Beansousproduit[];
  listeBeanpromotion: Beanpromotion[];
  listeproduit: Produits[];

  listedetail: Detail[];
  tamponDetail: Detail[];

  getData: boolean = false;
  getDataHisto: boolean = false;
  basicDatepicker = "";
  publication = new Date();
  id = "0";
  prix = "0";
  prixUdt = "0";
  idspr = 0;
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
  listeHisto: Beanpromotion[];
  idprn = 0;
  //
  flagDetail = false;
  remplacerimage = false;
  authSwap = 0;



  // M e t h o d s :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getcompanyarticles();
    //this.getsousproduitlib();
    this.getproduitlib();
    this.getwebcompanypromotion();
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

  //
  miseajourarticle(idart: number){
    this.liste.forEach(
      d => {
        if(d.idart == idart){
          this.id = idart.toString();
          this.actif = d.choix;
          this.libelleUpd = d.libelle;
          this.prixUdt = d.prix.toString();
          return;
        }
      }
    );

    this.formData = new FormData();
    this.formData.append("id", idart.toString());
    this.getDataHisto = false;

    // Look for all promotion this article has been linked to :
    this.meswebservices.getarticlepromotion(this.formData).toPromise()
      .then(
        resultat => {
          // Succes
          this.listeBeanpromotion = resultat.promotion;
          this.getDataHisto = true;
          this.nombrearticle = resultat.quantite;
          this.actif = resultat.actif;
          this.taille = resultat.taille;
        }
      );

      $('#modalupdate').modal();
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

          // Get it :
          this.getData = true;

          if (!this.alreadyInit) {
            setTimeout(function () {
              $('#datatables').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [
                  [10, 25, 50, -1],
                  [10, 25, 50, "All"]
                ],
                responsive: true,
                language: {
                  search: "_INPUT_",
                  searchPlaceholder: "Search records",
                }

              });
            }, 1000);

            this.alreadyInit = true;
          }

        }
      )
  }


  //
  getwebcompanypromotion(): void {
    this.meswebservices.getwebcompanypromotion().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeHisto = resultat;
            this.idprn = resultat[0].idprn;
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
    let momentVariable = moment(this.publication, 'MM-DD-YYYY');
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
    )
  }


  // Save 
  enregistrerPromotion(): void {
    this.formData.append("id", this.id);
    this.formData.append("actif", this.actif.toString());
    this.formData.append("idprn", this.idprn.toString());
    this.formData.append("nombrearticle", this.nombrearticle.toString());
    this.formData.append("authSwap", this.authSwap.toString()); 
    this.formData.append("libelle", this.libelleUpd); 
    this.formData.append("taille", this.taille.toString()); 
    this.formData.append("prix", this.prixUdt); 
    this.meswebservices.enregistrerArticleAndPromotion(this.formData).toPromise().then(
      resultat => {
        if (resultat.element == "OK") {
          location.reload();
        }
        else{
          alert("Erreur de traitement !");
        }
      }
    )
  }


  getproduitlib(): void {
    this.meswebservices.getAllProduits().toPromise()
      .then(
        resultat => {
          // Succes
          this.listeproduit = resultat;
          this.idprod = resultat[0].idprd;

          // Call this :
          this.getsousproduitlib();
        }
      )
  }


  getsousproduitlib(): void {
    this.meswebservices.getsousproduitlib().toPromise()
      .then(
        resultat => {
          // Succes
          this.listesousproduit = resultat;
          this.idspr = resultat[0].idspr;
          // Keep that one 
          this.tamponSousProduit = resultat;
          this.getDataSous = true;

          // Call this to make the update :
          this.onProduitChange();
          // Call :
          this.getAllDetails();
        }
      )
  }

  getAllDetails(): void {
    this.meswebservices.getAllDetails().toPromise()
      .then(
        resultat => {
          // Succes
          this.listedetail = resultat;
          this.iddet = resultat[0].iddet;
          // Keep that one 
          this.tamponDetail = resultat;

          // Call this to make the update :
          this.onSousProduitChange();
        }
      )
  }

  // 
  onProduitChange(): void {
    // Browse :    
    let cpt = 0;
    this.tamponSousProduit.forEach(
      d => {
        if(parseInt(d.produit) == this.idprod){
          // Fill ARRAY :
          //tp.push(d);
          cpt++;
        }
      }
    );

    if(cpt > 0){
      this.listesousproduit = new Array(cpt);
      this.getDataSous = false;
    } 

    let tp :Beansousproduit[] = new Array(cpt);

    cpt = 0;
    for(let j = 0; j < this.tamponSousProduit.length; j++){
      if(  parseInt(this.tamponSousProduit[j].produit) == this.idprod){
        // Fill ARRAY :
        let t = new Beansousproduit();
        t.idspr = this.tamponSousProduit[j].idspr;
        t.libelle = this.tamponSousProduit[j].libelle;
        t.produit = this.tamponSousProduit[j].produit;
        tp[cpt] = t;
        cpt++;
      }
    }

    if(cpt > 0){
      // Try to refresh :
      this.listesousproduit = tp;
      this.idspr = tp[0].idspr;

      // Call this :
      if(this.flagDetail) this.onSousProduitChange();
    }

    // Set FLAG :
    this.flagDetail = true;
  }


  // 
  onSousProduitChange(): void {
    // Browse :    
    let cpt = 0;
    this.tamponDetail.forEach(
      d => {
        if(d.idspr == this.idspr){
          cpt++;
        }
      }
    );

    if(cpt > 0){
      this.listedetail = new Array(cpt);
    } 

    let tp :Detail[] = new Array(cpt);

    cpt = 0;
    for(let j = 0; j < this.tamponDetail.length; j++){
      if(  this.tamponDetail[j].idspr == this.idspr){
        // Fill ARRAY :
        let t = new Detail();
        t.idspr = this.tamponDetail[j].idspr;
        t.libelle = this.tamponDetail[j].libelle;
        t.iddet = this.tamponDetail[j].iddet;
        t.lienweb = this.tamponDetail[j].lienweb;
        tp[cpt] = t;
        cpt++;
      }
    }

    if(cpt > 0){
      // Try to refresh :
      this.listedetail = tp;
      this.iddet = tp[0].iddet;
    }
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      if (this.formData.has("article")) this.formData.delete("article");
      this.formData.append("article", file);
      this.libfichier = file.name;
    }
    else {
      if (this.formData.has("article")) {
        this.formData.delete("article");
      }
    }
  }

  // More file :
  onMoreFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      if (this.formData.has("article")) this.formData.delete("article");
      this.formData.append("article", file);
      this.libmorefichier = file.name;
    }
    else {
      if (this.formData.has("article")) {
        this.formData.delete("article");
      }
    }
  }

  onCheckboxChange(e) {      
    if (e.target.checked) {
        this.authSwap = 1;
    } else {
        this.authSwap = 0;
    }
  }
}
