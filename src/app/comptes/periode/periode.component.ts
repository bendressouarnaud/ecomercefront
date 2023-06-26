import { Component, OnInit } from '@angular/core';
import { Nomenclature } from 'src/app/mesbeans/nomenclature';
import { Periode } from 'src/app/mesbeans/periode';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-periode',
  templateUrl: './periode.component.html',
  styleUrls: ['./periode.component.css']
})
export class PeriodeComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Periode[];
  getData: boolean = false;
  id = "0";
  frequence ="0";
  codes ="0";
  jour : number = 0;
  libelle = "";
  alreadyInit = false;
  idmot = 0;


  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getperiodes();
  }


  afficherDonnee(idnom: string, libelle: string, frequence: string, cds: string, jr:number) {
    this.id = idnom;
    this.libelle = libelle;
    this.frequence = frequence;
    this.codes = cds;
    this.jour = jr;
    $('#myModal').modal();
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.libelle = "";
    this.id = "0";
    $('#myModal').modal();
  }

  /* Get All Activities */
  getperiodes(): void {
    this.meswebservices.getperiodes().toPromise()
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


  // Save 
  enregistrer(): void {

    // Pour obtenir le nombre de fois que le paiement devra se faire pour une taxe, 
    // on fera '' 12 mois / frequence ''

    this.meswebservices.enregistrerPeriode(this.libelle, this.id, this.frequence, this.codes, this.jour.toString()).toPromise().then(
      resultat => {
        if (resultat.element == "ok") {
          this.getperiodes();
        }
      }
    )
  }


}
