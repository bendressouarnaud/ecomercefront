import { Component, OnInit } from '@angular/core';
import { BeanDetailModalite } from 'src/app/mesbeans/beandetailmodalite';
import { Detail } from 'src/app/mesbeans/detail';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-retourarticle',
  templateUrl: './retourarticle.component.html',
  styleUrls: ['./retourarticle.component.css']
})
export class RetourarticleComponent implements OnInit {

  // Attributes
  listeDetail: Detail[];
  listeDetailModalite: BeanDetailModalite[];
  iddet = 0;
  id = 0;
  getData = false;
  modalite = "";
  formData = new FormData();


  // Methods :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getwebdetailbycompany();
    this.getwebdetailmodalitebycompany();
  }

  getwebdetailbycompany(): void {
    this.meswebservices.getwebdetailbycompany().toPromise()
      .then(
        resultat => {
          // Succes
          this.listeDetail = resultat;
          this.iddet = resultat[0].iddet;
        }
      )
  }


  /*  */
  getwebdetailmodalitebycompany(): void {
    this.meswebservices.getwebdetailmodalitebycompany().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeDetailModalite = resultat;
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
    this.modalite = "";
    this.iddet = this.listeDetail[0].iddet;
    $('#myModal').modal();
  }  


  // Save 
  enregistrer(): void {
    this.formData.append("id", this.id.toString());
    this.formData.append("modalite", this.modalite);
    this.formData.append("iddet", this.iddet.toString());
    // Dates :
    this.meswebservices.enregistrerModalite(this.formData).toPromise().then(
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
