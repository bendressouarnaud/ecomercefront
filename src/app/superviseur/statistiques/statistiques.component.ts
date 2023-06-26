import { Component, OnInit } from '@angular/core';
import { Beanexportjournal } from 'src/app/mesbeans/beanexportjournal';
import { Beanpaiementretard } from 'src/app/mesbeans/beanpaiementretard';
import { Beanpaymentstats } from 'src/app/mesbeans/beanpaymentstats';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  // A T T R I B U T E S  :
  bstats = new Beanpaymentstats();
  listeRetard: Beanpaiementretard[];
  listeJour: Beanpaiementretard[];
  listeJournal: Beanexportjournal[];
  getRetard = true;
  getJour = true;
  getJournal = true;


  // M E T H O D S :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getpaymentstatistics();
    this.getmagasinpaiementretard();
    this.getmagasinpaiementjour();
    this.getcurrentdayjournal();
  }

  /**/
  getpaymentstatistics(): void {
    this.meswebservices.getpaymentstatistics().toPromise()
      .then(
        resultat => {
          // Succes
          this.bstats = resultat;
        }
      )
  }

  getmagasinpaiementretard(): void {
    this.meswebservices.getmagasinpaiementretard().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeRetard = resultat;                        
          }

          this.getRetard = true;
          setTimeout(function () {
            $('#datatableretard').DataTable({
              "columnDefs": [
                { "width": "20%", "targets": 0 }
              ],

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
              ,"order": [[ 2, "desc" ]]
            });
          }, 1000);
        }
      )
  }

  getmagasinpaiementjour(): void {
    this.meswebservices.getmagasinpaiementjour().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeJour = resultat;                        
          }

          this.getJour = true;
          setTimeout(function () {
            $('#datatablejour').DataTable({
              /*"columnDefs": [
                { "width": "20%", "targets": 0 }
              ],*/

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
              ,"order": [[ 2, "desc" ]]
            });
          }, 1000);
        }
      )
  }


  getcurrentdayjournal(): void {
    this.meswebservices.getcurrentdayjournal().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeJournal = resultat;                        
          }

          this.getJournal = true;
          setTimeout(function () {
            $('#datatablejournal').DataTable({
              /*"columnDefs": [
                { "width": "20%", "targets": 0 }
              ],*/

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
              ,"order": [[ 2, "desc" ]]
            });
          }, 1000);
        }
      )
  }

}
