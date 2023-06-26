import { Component, OnInit } from '@angular/core';
import { Mairie } from 'src/app/mesbeans/mairie';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-gestionmairie',
  templateUrl: './gestionmairie.component.html',
  styleUrls: ['./gestionmairie.component.css']
})
export class GestionmairieComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Mairie[];
  getDonne: boolean = false;
  id = "0";
  libelle = "";
  code = "";
  montant = "";
  alreadyInit = false;
  idt = 0;

  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getAllMairie();
  }

  afficher(id : string, libelle : string){
    this.id = id;
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
  getAllMairie(): void {
    this.meswebservices.getAllMairie().toPromise()
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

  

}
