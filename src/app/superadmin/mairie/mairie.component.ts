import { Component, OnInit } from '@angular/core';
import { Mairie } from 'src/app/mesbeans/mairie';
import { Partenaire } from 'src/app/mesbeans/partenaire';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-mairie',
  templateUrl: './mairie.component.html',
  styleUrls: ['./mairie.component.css']
})
export class MairieComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Partenaire[];
  getDonne: boolean = false;
  id = "0";
  libelle = "";
  code = "";
  cleapi = "";
  monnaie = "";
  idsite = "";
  montant = "";
  contact = "";
  email = "";
  alreadyInit = false;
  idt = 0;

  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getAllPartenaies();
  }

  afficher(id : string){
    this.liste.forEach(
      d => {
        if(d.ident == parseInt(id)){
          this.id = id;
          this.libelle = d.libelle;
          this.contact = d.contact;
          this.email = d.email;
        }
      }
    )    
    $('#myModal').modal();
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.libelle = "";
    this.contact = "";
    this.email= "";
    this.id = "0";
    $('#myModal').modal();
  }

  /* Get All Activities */
  getAllPartenaies(): void {
    this.meswebservices.getAllPartenaies().toPromise()
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
    this.meswebservices.enregistrerPartenaire(this.id,this.libelle,  this.contact, this.email).toPromise().then(
      resultat => {
        if (resultat.element == "ok") { 
          /*$('#myModal').hide()
          this.getAllMairie();*/
          location.reload();
        }
        else if (resultat.element == "pok") {
          this.warnmessage("Le code renseigné est déjà attribué à une amirie !");
        }
      }
    )
  }


  warnmessage(information: string) {
    $.notify({
      icon: 'notifications',
      message: information
    }, {
      type: 'danger',
      timer: 5000,
      placement: {
        from: 'bottom',
        align: 'center'
      },
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }

}
