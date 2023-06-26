import { Component, OnInit } from '@angular/core';
import { Parametrage } from 'src/app/mesbeans/parametrage';
import { ParamWeb } from 'src/app/mesbeans/paramweb';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {

  // Attributes :
  getParam = false;
  initTable = false;
  notifMail = "1";
  prm = new Parametrage();
  trm1 = "";
  trm2 = "";
  trm3 = "";
  trm4 = "";
  idT1 = "1";
  idT2 = "4";
  idT3 = "7";
  idT4 = "10";
  metrecarre="0";



  constructor(private meswebservices: MeswebservService) { }


  ngOnInit(): void {
    this.getparametresweb();
  }


  /* Get user */
  getparametresweb(): void {
    this.meswebservices.getparametresweb().toPromise()
      .then(
        resultat => {
          this.prm = resultat;
          // Succes
          this.getParam = true;

          // Process :
          this.trm1 = this.processMonth(resultat.trimestreun);
          this.trm2 = this.processMonth(resultat.trimestredeux);
          this.trm3 = this.processMonth(resultat.trimestretrois);
          this.trm4 = this.processMonth(resultat.trimestrequatre);

          if (!this.initTable) {
            //
            this.initTable = true;

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
        }
      )
  }


  ouvrirzonecom(): void {
    // Open modal :
    $('#myModalParametres').modal();
  }



  enregistrer() {
    // Display message :
    //this.information = "Patientez svp ...";

    this.meswebservices.managewebparameters(this.metrecarre, this.idT1, this.idT2, this.idT3, this.idT4).toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.element == "ok") {
            location.reload();
          }
        },
        (error) => {
          location.reload();
        }
      )
  }

  processMonth(mois: number): string{
    if(mois==1) return "Janvier";
    else if(mois==2) return "Février";
    else if(mois==3) return "Mars";
    else if(mois==4) return "Avril";
    else if(mois==5) return "Mai";
    else if(mois==6) return "Juin";
    else if(mois==7) return "Juillet";
    else if(mois==8) return "Aout";
    else if(mois==9) return "Septembre";
    else if(mois==10) return "Octobre";
    else if(mois==11) return "Novembre";
    else if(mois==12) return "Décembre";

  }

  modifier() {

    this.idT1 = this.prm.trimestreun.toString();
    this.idT2 = this.prm.trimestredeux.toString();
    this.idT3 = this.prm.trimestretrois.toString();
    this.idT4 = this.prm.trimestrequatre.toString();

    // Montant :
    this.metrecarre = this.prm.prixmetrecarre.toString();

    // Display :
    $('#myModalParametres').modal();
  }

}
