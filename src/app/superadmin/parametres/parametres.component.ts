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

  // A t t ri b u t e s 
  getParam = false;
  mail = "1";
  notifMail = "1";



  // M e t h o d s
  constructor(private meswebservices: MeswebservService) { }


  ngOnInit(): void {
    this.lookforsystemparameter();
  }


  lookforsystemparameter(): void {
    this.meswebservices.lookforsystemparameter().toPromise()
      .then(
        resultat => {
          this.mail = resultat.element.toString();
          this.getParam = true;

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


  ouvrirzonecom(): void {
    // Open modal :
    $('#myModalParametres').modal();
  }



  enregistrer() {
    // Display message :
    this.meswebservices.saveadminparams(this.mail).toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.element == "1") {
            location.reload();
          }
        },
        (error) => {
          location.reload();
        }
      )
  }

  modifier() {
    // Display :
    $('#myModalParametres').modal();
  }

}
