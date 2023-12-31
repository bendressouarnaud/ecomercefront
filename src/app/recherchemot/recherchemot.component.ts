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
import { BeanLigneOccurence } from '../mesbeans/beanligneoccurence';

declare const $: any;

@Component({
  selector: 'app-recherchemot',
  templateUrl: './recherchemot.component.html',
  styleUrls: ['./recherchemot.component.css']
})
export class RecherchemotComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: BeanLigneOccurence[];  
  expression = "";
  libfichier = "";
  formData = new FormData();
  getData = false;
  alreadyInit = false;



  // M e t h o d s :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getData = true;
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
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.expression = "";
    this.libfichier = "";
    // Reset this :
    //this.formData = new FormData();
    $('#myModal').modal();
  }




  // Save 
  enregistrer(): void {
    //alert("expression : "+this.expression.toString());
    if(this.expression.trim.length){
      alert("Veuillez saisir le TEXTE à rechercher ... ");
      return;
    }
    else if (!this.formData.has("brochure")) {
      alert("Veuillez sélectionner le fichier dans lequel rechercher le texte ... ");
      return;
    }

    if (this.formData.has("expression")) {
      this.formData.delete("expression");
      this.formData.append("expression", this.expression);
    }
    else this.formData.append("expression", this.expression);
    this.meswebservices.sendWordToRead(this.formData).toPromise().then(
      resultat => {
        this.liste = resultat;

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
    );
  }
  

  onFileSelected(event) {
    const file: File = event.target.files[0];

    //
    if (this.formData.has("brochure")) {
      this.formData.delete("brochure");
      this.formData.append("brochure", file);
    }
    else this.formData.append("brochure", file);
    this.libfichier = file.name;
    /*if (file) {
      if (this.formData.has("brochure")) this.formData.delete("brochure");
      this.formData.append("brochure", file);
      this.libfichier = file.name;
    }
    else {
      if (this.formData.has("brochure")) {
        this.formData.delete("brochure");
      }
    }*/
  }

}
