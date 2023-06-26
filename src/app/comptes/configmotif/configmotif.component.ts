import { Component, OnInit } from '@angular/core';
import { Motif } from 'src/app/mesbeans/motif';
import { Superficie } from 'src/app/mesbeans/superficie';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-configmotif',
  templateUrl: './configmotif.component.html',
  styleUrls: ['./configmotif.component.css']
})
export class ConfigmotifComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Superficie[];
  getDonne: boolean = false;
  id = "0";
  libelle = "";
  montant = "";
  alreadyInit = false;
  idt = 0;


  // M e t h o d s :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getAllSuperficie();
  }

  affichermotif(idmot : string, libelle : string){
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
  getAllSuperficie(): void {
    this.meswebservices.getAllSuperficie().toPromise()
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

    this.meswebservices.enregistrerSuperficie(this.libelle, this.id, this.montant).toPromise().then(
      resultat => {
        if (resultat.element == "ok") {
          this.getAllSuperficie();
        }
      }
    )
  }

}
