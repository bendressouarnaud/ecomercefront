import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/mesbeans/article';
import { BeanDataLienGrossiste } from 'src/app/mesbeans/beandataliengrossiste';
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
  listehisto: BeanDataLienGrossiste[];

  getData: boolean = false;
  getDataHisto: boolean = false;
  basicDatepicker = "";
  publication = new Date();
  id = "0";
  prix = "0";
  prixforfait = "0";
  prixUdt = "0";
  idspr = 0;
  idgro: number = 0;
  idart: number = 0;
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
    this.getgrossisteliendata();
  }


  afficherDonnee(idnom: string, libelle: string, frequence: string, cds: string, jr:number) {
    this.id = idnom;
    this.libelle = libelle;
    $('#myModal').modal();
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.prixforfait = "0";
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
            this.idart = resultat[0].idart;
            this.onProduitChange();
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
            this.idgro = resultat[0].idgro;
          }
        }
      )
  }


  // Save 
  enregistrer(): void {
    this.formData.append("id", this.id);
    this.formData.append("idart", this.idart.toString());
    this.formData.append("idgro", this.idgro.toString());
    this.formData.append("prixforfait", this.prixforfait);
    //  :
    this.meswebservices.enregistrerForfaitGrosssiste(this.formData).toPromise().then(
      resultat => {
        if (resultat.element == "OK") {
          location.reload();
        }
        else{
          alert("Erreur de traitement !");
        }
      }
    );
  }

  // 
  onProduitChange(): void {
    // Browse :    
    this.liste.forEach(
      d => {
        if(d.idart == this.idart){
          this.prix = d.prix.toLocaleString();
          return;
        }
      }
    );
  }

  //
  consulter(idlgo: string, idart: number, idgro: number, prixforfait: string){
    this.id = idlgo;
    this.idart = idart;
    this.idgro = idgro;
    this.prixforfait = prixforfait;
    this.formData = new FormData();
    $('#myModal').modal();
  }

  //
  getgrossisteliendata(): void {
    this.meswebservices.getgrossisteliendata().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listehisto = resultat;
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
}
