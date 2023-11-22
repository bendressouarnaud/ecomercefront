import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/mesbeans/clientgouabo';
import { Grossiste } from 'src/app/mesbeans/grossiste';
import { Mairie } from 'src/app/mesbeans/mairie';
import { Partenaire } from 'src/app/mesbeans/partenaire';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Client[];
  getDonne: boolean = false;

  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  /* Get All Activities */
  getAllClients(): void {
    this.meswebservices.getAllClients().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.liste = resultat;
          }

          // Get it :
          this.getDonne = true;

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

}
