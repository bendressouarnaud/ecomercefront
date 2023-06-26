import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BeanLocation } from 'src/app/mesbeans/beanlocation';
import { BeanMagasin } from 'src/app/mesbeans/beanmagasin';
import { Profil } from 'src/app/mesbeans/profil';
import { ReponseDonCom } from 'src/app/mesbeans/reponsedoncom';
import { ReponseUser } from 'src/app/mesbeans/reponseuser';
import { ReponseUserFul } from 'src/app/mesbeans/reponseuserful';
import { ReponseUserFulNew } from 'src/app/mesbeans/reponseuserfulnew';
import { Situationzone } from 'src/app/mesbeans/situationzoone';
import { Superficie } from 'src/app/mesbeans/superficie';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  // Attributes :
  listeSuperficie: Superficie[];
  listeEmplacement: Situationzone[];

  listeProfil: Profil[];
  listeCommerciaux: ReponseUser[];
  listeCommerciauxFul: ReponseUserFulNew[];
  listeCommercants: ReponseUserFulNew[];
  userToUpdate: ReponseUserFul[];
  getListeProfil = false;
  getListeCom = false;
  profil: Number = 0;
  email: String = "";
  nom: String = "";
  prenom: String = "";
  contact: String = "";
  idDone: String = "";
  initTable = false;
  setModification = false;
  setUserId = "";
  userconnexion = "";
  passconnexion = "";
  modes = "0";
  emailCollab: String = "";
  information: String = "";
  reponseReport = new ReponseDonCom();

  //
  idmag = 0;
  idcom = "0";
  idloc = 0;
  numero = "";
  idsit = 0;
  superficie = 0;
  listeMagasin: BeanMagasin[];
  getMagasin = false;
  basicDatepicker = "";
  dateDebut = new Date();
  listeLocation: BeanLocation[];
  getData = false;

  // Propriétaire
  dropdownListProp = [];
  dropdownSettingsProp = {};
  selectedItemsProp = [];
  membresIdProp = [];
  proprietaireId = [];

  // Bien :
  dropdownListBien = [];
  dropdownSettingsBien = {};
  selectedItemsBien = [];


  // Methods :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getallmagasinsnotlocated();
    this.getAllCommercants();
    this.getLocationMagasin();
  }

  ouvrirzonecom(): void {
    // Open modal :
    this.numero = "";
    $('#myModal').modal();
  }

  /* get RAPPORT list :*/
  getallmagasinsnotlocated(): void {
    this.meswebservices.getallmagasinsnotlocated().toPromise()
      .then(
        resultat => {
          if (resultat.length > 0) {
            this.listeMagasin = resultat;
            this.idmag = resultat[0].idmag;

            // Browse :
            var tempUsers = [];
            for (var i = 0; i < resultat.length; i++) {
              // Keep only those that are free :
              if(resultat[i].location == 0){
                tempUsers.push({
                  item_id: resultat[i].idmag,
                  item_text: resultat[i].numero
                });                
              }
              if(i==0){
                this.selectedItemsBien = tempUsers;
              }
            }

            //
            this.dropdownListBien = tempUsers;

            // Init :
            this.dropdownSettingsBien = {
              singleSelection: true,
              idField: 'item_id',
              textField: 'item_text',
              selectAllText: 'Sélectionner tout',
              unSelectAllText: 'Supprimer les sélections',
              itemsShowLimit: 5,
              maxHeight: 400,
              allowSearchFilter: true
            };
          }
        }
      )
  }

  // Save 
  enregistrer(): void {

    // Process the date :         
    let momentVariable = moment(this.dateDebut, 'MM-DD-YYYY');
    let dates = momentVariable.format('YYYY-MM-DD');

    if(this.idmag ==0) this.warnmessage("Veuillez sélectionner un BIEN ...");
    else if(parseInt(this.idcom) ==0) this.warnmessage("Veuillez sélectionner un Propriétaire ...");
    else{
      this.meswebservices.enregistrerLocation(this.idmag, this.idcom, this.idloc,
        dates).toPromise().then(
          resultat => {
            if (resultat.element == "ok") {
              location.reload();
            }
            else if (resultat.element == "pok") {
              //this.warnmessage("L'adresse MAIL est déjà en utilisation ...");
            }
          }
        )
    }    
  }


  /* Get user */
  getLocationMagasin(): void {
    this.meswebservices.getLocationMagasin().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeLocation = resultat;                        
          }

          // Set flag :
          this.getData = true;

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


  /* Get user */
  getAllusers(): void {
    this.meswebservices.getAllusers().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeCommerciauxFul = resultat;
            this.getListeCom = true;

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
        }
      )
  }

  modifieruser(userids: string) {
    //alert("id : "+userids);  getusertoupdate
    this.meswebservices.getusertoupdate(userids).toPromise()
      .then(
        resultat => {
          if (resultat.length > 0) {

            // Set the FLAGS :
            this.setModification = true;
            this.setUserId = userids;

            this.userToUpdate = resultat;
            // update variable CONTENT :
            this.nom = this.userToUpdate[0].nom;
            this.prenom = this.userToUpdate[0].prenom;
            this.contact = this.userToUpdate[0].contact;
            this.email = this.userToUpdate[0].email;
            this.profil = parseInt(this.userToUpdate[0].identifiant.toString());
            this.modes = this.userToUpdate[0].modes.toString();
            this.idDone = this.userToUpdate[0].iddone.toString();
            // Display :
            $('#myModal').modal();
          }
        }
      )
  }



  activationquestion(email: string) {
    // Open modal :
    this.emailCollab = email;
    this.information = "";
    $('#modalactivation').modal();
  }


  desactivercompte(email: string) {
    // Open modal :
    this.emailCollab = email;
    this.information = "";
    $('#modalaccountblock').modal();
  }


  desactiverlecompte() {
    // Display message :
    this.information = "Patientez svp ...";

    this.meswebservices.desactiverlecompte(this.emailCollab.toString()).toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.element == "ok") {
            this.information = "";
            location.reload();
          }
        },
        (error) => {
          location.reload();
        }
      )
  }


  activerUser() {
    // Display message :
    this.information = "Patientez svp ...";

    this.meswebservices.activercompteuser(this.emailCollab.toString()).toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.element == "ok") {
            this.information = "";
            location.reload();
          }
        },
        (error) => {
          location.reload();
        }
      )
  }


  parametresconnexion(userids: string) {
    //alert("id : "+userids);  getusertoupdate
    this.meswebservices.parametresconnexion(userids).toPromise()
      .then(
        resultat => {
          if (resultat.length > 0) {
            this.userconnexion = resultat[0].prenom.toString();
            if (resultat[0].nom.toString().length == 4) {
              this.passconnexion = resultat[0].nom.toString();
            }
            else {
              //this.passconnexion = "********";
              this.passconnexion = resultat[0].nom.toString();
            }
            //resultat[0].nom.toString();
            // Display :
            $('#myModalParametres').modal();
          }
        }
      )
  }






  // Clean FIELDS :
  cleanFields() {
    this.nom = "";
    this.prenom = "";
    this.contact = "";
    this.email = "";
  }


  warnmessage(information: string) {
    $.notify({
      icon: 'notifications',
      message: information
    }, {
      type: 'success',
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


  // Get Data 
  getadministratorstats(): void {
    this.meswebservices.getadministratorstats().toPromise().then(
      resultat => {
        this.reponseReport.commentaires = resultat.commentaires;   // Liste Superviseurs
        this.reponseReport.commerciaux = resultat.commerciaux;   // Liste comptes bloques
        this.reponseReport.rapports = resultat.rapports;   // Liste de tous les utilisateurs
        this.reponseReport.rdv = resultat.rdv;  // Liste Commerciaux
      }
    );
  }




  /**/
  getEmplacement(): void {
    this.meswebservices.getAllSituationzone().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeEmplacement = resultat;
            this.idsit = resultat[0].idsit;
          }
        }
      )
  }


  /**/
  getSuperficie(): void {
    this.meswebservices.getAllSuperficie().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeSuperficie = resultat;
            this.superficie = resultat[0].idsup;
          }
        }
      )
  }

  getAllCommercants(): void {
    this.meswebservices.getAllCommercants().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeCommercants = resultat;
            this.idcom = resultat[0].iduser.toString();
            this.contact = resultat[0].contact;

            // Browse :
            var tempUsers = [];
            for (var i = 0; i < resultat.length; i++) {
              tempUsers.push({
                item_id: resultat[i].iduser,
                item_text: (resultat[i].nom + " " +resultat[i].prenom)
              });
              if(i==0){
                this.selectedItemsProp = tempUsers;
              }
            }

            //
            this.dropdownListProp = tempUsers;

            // Init :
            this.dropdownSettingsProp = {
              singleSelection: true,
              idField: 'item_id',
              textField: 'item_text',
              selectAllText: 'Sélectionner tout',
              unSelectAllText: 'Supprimer les sélections',
              itemsShowLimit: 5,
              maxHeight: 400,
              allowSearchFilter: true
            };
          }
        }
      )
  }


  onDisplayContact(): void {
    // Request to get 'taxe'
    this.listeCommercants.forEach(
      d => {
        if (d.iduser == this.idcom) {
          this.contact = d.contact;
          return;
        }
      }
    )
  }



  // Propriétaire :
  // whenever an item is selected :
  onItemSelectProp(item: any) {
    // Display User DATA :
    this.idcom = item.item_id;
    this.listeCommercants.forEach(
      d => {
        if (d.iduser == item.item_id) {
          this.contact = d.contact;
          return;
        }
      }
    )
  }

  // whenever an item is deselected :
  onItemDeSelectProp(item: any) {
    //
    this.idcom ="0";
    this.contact ="";
  }


  // Bien :
  // whenever an item is selected :
  onItemSelectBien(item: any) {
    // Display User DATA :
    this.idmag = parseInt(item.item_id);
  }

  // whenever an item is deselected :
  onItemDeSelectBien(item: any) {
    //
    this.idmag = 0;
  }

  // Whenever all items are selected :
  /*onSelectAll(items: any) {
    // Reset the table :
    this.membresId = [];
    for (let i = 0; i < items.length; i++) {
      if (parseInt(items[i].item_id) > 0) {
        this.membresId.push(items[i].item_id);
      }
    }
  }
  */

}
