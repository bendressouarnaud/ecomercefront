import { Component, OnInit } from '@angular/core';
import { BeanDetailModalite } from 'src/app/mesbeans/beandetailmodalite';
import { Detail } from 'src/app/mesbeans/detail';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';
import * as moment from 'moment';
import { Beanpromotion } from 'src/app/mesbeans/beanpromotion';

declare const $: any;

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {


  // Attributes :
  basicDateDebutpicker = "";
  getDateDebut = new Date();
  basicDateFinpicker = "";
  getDateFin = new Date();
  libellepromotion = "";
  reduction = "0";


  listeHisto: Beanpromotion[];
  iddet = 0;
  id = 0;
  getData = false;
  modalite = "";
  formData = new FormData();


  // Methods :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getwebcompanypromotion();
  }


  /*  */
  getwebcompanypromotion(): void {
    this.meswebservices.getwebcompanypromotion().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeHisto = resultat;
          }

          // Get it :
          this.getData = true;

          //
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

        }
      )
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.libellepromotion = "";
    this.reduction = "0";
    $('#myModal').modal();
  }


  // Save 
  enregistrer(): void {
    // Process the date :         
    let momentVariable = moment(this.getDateDebut, 'MM-DD-YYYY');
    let dateDeb = momentVariable.format('YYYY-MM-DD');
    //
    momentVariable = moment(this.getDateFin, 'MM-DD-YYYY');
    let dateFin = momentVariable.format('YYYY-MM-DD');

    this.formData = new FormData();

    this.formData.append("id", this.id.toString());
    this.formData.append("datedebut", dateDeb);
    this.formData.append("datefin", dateFin);
    this.formData.append("reduction", this.reduction);
    this.formData.append("libellepromotion", this.libellepromotion);
    // Dates :
    this.meswebservices.enregistrerPromotion(this.formData).toPromise().then(
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
}
