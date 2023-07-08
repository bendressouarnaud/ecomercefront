import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field/form-field-control';
import { Mairie } from 'src/app/mesbeans/mairie';
import { Partenaire } from 'src/app/mesbeans/partenaire';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Produits } from 'src/app/mesbeans/produits';
import { Beansousproduit } from 'src/app/mesbeans/beansousproduit';
import { Sousproduit } from 'src/app/mesbeans/sousproduit';
import { Beandetail } from 'src/app/mesbeans/beandetail';

declare const $: any;

@Component({
  selector: 'app-detailsousproduit',
  templateUrl: './detailsousproduit.component.html',
  styleUrls: ['./detailsousproduit.component.css']
})
export class DetailsousproduitComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Produits[];
  listeSousproduit: Sousproduit[];
  listehisto: Beandetail[];
  getDonne = false;
  alreadyInit = false;
  libelle = "";
  libfichier = "";
  formData = new FormData();
  idprd = 0;
  idspr = 0;
  /**** */
  tamponSousProduit: Sousproduit[];


  // M e t h o d s 
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getAllProduits();    
    this.gethistoriquesdetails();
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.libelle = "";
    $('#myModal').modal();
  }

  /* Get All Activities */
  getAllProduits(): void {
    this.meswebservices.getAllProduits().toPromise()
      .then(
        resultat => {
          this.liste = resultat;
          this.idprd = resultat[0].idprd;

          // Call this :
          this.getAllSousProduits();
        }
      )
  }

  /* Get All Sousprodui */
  getAllSousProduits(): void {
    this.meswebservices.getsousproduitdata().toPromise()
      .then(
        resultat => {
          this.listeSousproduit = resultat;
          this.tamponSousProduit = resultat;
          this.idspr = resultat[0].idspr;

          //
          this.onProduitChange();
        }
      )
  }

  gethistoriquesdetails(): void {
    this.meswebservices.gethistoriquesdetails().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listehisto = resultat;
          }

          // Get it :
          this.getDonne = true;

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

  // Save 
  enregistrer(): void {
    this.formData.append("libelle", this.libelle);
    this.formData.append("idspr", this.idspr.toString());
    this.meswebservices.enregistrerDetail(this.formData).toPromise().then(
      resultat => {
        if (resultat.element == "OK") {
          location.reload();
        }
        else{
          this.warnmessage("Erreur de traitement !");
        }
      }
    )
  }


  onFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      if (this.formData.has("detail")) this.formData.delete("detail");
      this.formData.append("detail", file);
      this.libfichier = file.name;
    }
    else {
      if (this.formData.has("detail")) {
        this.formData.delete("detail");
      }
    }
  }


  warnmessage(information: string) {
    $.notify({
      icon: 'notifications',
      message: information
    }, {
      type: 'danger',
      timer: 5000,
      placement: {
        from: 'bottom',
        align: 'center'
      },
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
  
  // 
  onProduitChange(): void {
    // Browse :    
    let cpt = 0;
    this.tamponSousProduit.forEach(
      d => {
        if(d.idprd == this.idprd){
          // Fill ARRAY :
          //tp.push(d);
          cpt++;
        }
      }
    );

    if(cpt > 0){
      this.listeSousproduit = new Array(cpt);
      //this.getDataSous = false;
    } 

    let tp :Sousproduit[] = new Array(cpt);

    cpt = 0;
    for(let j = 0; j < this.tamponSousProduit.length; j++){
      if(  this.tamponSousProduit[j].idprd == this.idprd){
        // Fill ARRAY :
        let t = new Sousproduit();
        t.idspr = this.tamponSousProduit[j].idspr;
        t.libelle = this.tamponSousProduit[j].libelle;
        t.idprd = this.tamponSousProduit[j].idprd;
        t.lienweb = this.tamponSousProduit[j].lienweb;
        tp[cpt] = t;
        cpt++;
      }
    }

    if(cpt > 0){
      // Try to refresh :
      this.listeSousproduit = tp;
      this.idspr = tp[0].idspr;
    }
  }

}
