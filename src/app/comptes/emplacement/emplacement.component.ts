import { Component, OnInit } from '@angular/core';
import { Situationzone } from 'src/app/mesbeans/situationzoone';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.component.html',
  styleUrls: ['./emplacement.component.css']
})
export class EmplacementComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Situationzone[];
  getDonne: boolean = false;
  id = "0";
  libelle = "";
  montant = "";
  alreadyInit = false;
  idt = 0;


  // M e t h o d s :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  affichermotif(idmot: string, libelle: string) {
    this.id = idmot;
    this.libelle = libelle;
    $('#myModal').modal();
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.libelle = "";
    this.montant = "";
    this.id = "0";
    $('#myModal').modal();
  }

  /* Get All Activities */
  getAllData(): void {
    this.meswebservices.getAllSituationzone().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.liste = resultat;
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

    this.meswebservices.enregistrerEmplacement(this.libelle, this.id).toPromise().then(
      resultat => {
        if (resultat.element == "ok") { 
          this.getAllData();
        }
      }
    )
  }

}