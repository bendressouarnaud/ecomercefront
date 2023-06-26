import { Component, OnInit } from '@angular/core';
import { Beandetailnom } from 'src/app/mesbeans/beandetailnom';
import { BeanMagasin } from 'src/app/mesbeans/beanmagasin';
import { Nomenclature } from 'src/app/mesbeans/nomenclature';
import { Profil } from 'src/app/mesbeans/profil';
import { ReponseDonCom } from 'src/app/mesbeans/reponsedoncom';
import { ReponseUser } from 'src/app/mesbeans/reponseuser';
import { ReponseUserFul } from 'src/app/mesbeans/reponseuserful';
import { ReponseUserFulNew } from 'src/app/mesbeans/reponseuserfulnew';
import { Situationzone } from 'src/app/mesbeans/situationzoone';
import { Superficie } from 'src/app/mesbeans/superficie';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';
import * as moment from 'moment';

declare const $: any;

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {

  // Attributes :
  listeSuperficie: Superficie[];
  listeEmplacement: Situationzone[];

  listeProfil: Profil[];
  listeCommerciaux: ReponseUser[];
  listeCommerciauxFul: ReponseUserFulNew[];
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
  recettebrute = "0";
  emailCollab: String = "";
  information: String = "";
  reponseReport = new ReponseDonCom();

  //
  idmag = 0;
  odp = 0;
  idetail = 0;
  taxe = 0;
  numero = "";
  idsit = 0;
  superficie = 0;
  listeMagasin: BeanMagasin[];
  getMagasin = false;
  listeNomenclature: Nomenclature[];
  listeDetailNom: Beandetailnom[];
  hideDetail = false;

  periodicite = "";
  cot = "";
  unt = "";
  denomination = "";
  updateData = false;
  basicDatepicker = "";
  dateService = new Date();
  isOdpDisabled = false;


  // Methods :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getEmplacement();
    this.getSuperficie();
    this.getallmagasins();
    this.getAllNomenclatures();
  }

  ouvrirzonecom(): void {
    // Open modal :
    this.idmag = 0;
    this.odp = 0;
    this.numero = "";
    this.denomination = "";
    this.idsit = this.listeEmplacement[0].idsit;
    this.superficie = this.listeSuperficie[0].idsup;
    this.dateService = new Date();
    $('#myModal').modal();
  }

  /* get RAPPORT list :*/
  getallmagasins(): void {
    this.meswebservices.getallmagasins().toPromise()
      .then(
        resultat => {
          if (resultat.length > 0) {
            this.listeMagasin = resultat;
          }

          this.getMagasin = true;
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

  // Save 
  enregistrerMagasin(): void {

    if (this.checkAuventValue(this.idetail) && (this.superficie == 1)) {
      this.warnmessage("Veuillez sélectionner une superficie !!! ");
      return;
    }
    else {
      // Process the date :         
      let momentVariable = moment(this.dateService, 'MM-DD-YYYY');
      let dates = momentVariable.format('YYYY-MM-DD');

      this.meswebservices.enregistrerMagasin(this.idmag, this.numero, this.idsit,
        this.superficie, this.denomination, this.taxe, this.idetail, this.odp, dates,
        this.recettebrute).toPromise().then(
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


  // Function to check 'AUVENT'
  checkAuventValue(id: number): boolean{
    let checkAuvent = false;
    this.listeDetailNom.forEach(
      d => {
        if (d.idnmd == id) {
          if(d.codeauvent == 1) checkAuvent = true;
          return;
        }
      });
    return checkAuvent;
  }


  /* Get user */
  getusersbyprofil(): void {
    this.meswebservices.getusersbyprofil("commercial").toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeCommerciaux = resultat;
            this.getListeCom = true;

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


  //
  getAllNomenclatures(): void {
    this.meswebservices.getAllNomenclatures().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeNomenclature = resultat;
            this.taxe = resultat[0].idnom;
            this.onTaxeChange();
          }
        }
      )
  }


  // On ODP change :
  onOdpChange() {
    if (this.checkAuventValue(this.idetail)) {
      // only set to 0 : 
      this.odp = 0;
    }
    else {
      // if Yes, select by default a value in 'SUPERFICIE' :
      if ((this.odp == 1) && (this.superficie == 1)) {
        this.superficie = this.listeSuperficie[1].idsup;
      }
      else if ((this.odp == 0) && (this.superficie > 1)) {
        this.superficie = this.listeSuperficie[0].idsup;
      }
    }
  }


  /**    **/
  onTaxeChange(): void {
    // Request to get 'taxe'
    this.hideDetail = false;
    this.meswebservices.requestfortaxedata(this.taxe).toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeDetailNom = resultat;
            this.hideDetail = true;
            if (!this.updateData) {
              this.idetail = resultat[0].idnmd;
              // Periodicite et detail
              this.periodicite = resultat[0].periodicite.toString();
              this.cot = resultat[0].cout.toLocaleString();
              this.unt = resultat[0].unite.toString();

              // Display 
              //if (this.idetail == 29 || this.idetail == 30) this.onDisplayDetail();
              if (this.checkAuventValue(this.idetail)) this.onDisplayDetail();
              else if (this.isOdpDisabled) this.isOdpDisabled = false;
            }
            else {
              this.updateData = false;
              this.listeDetailNom.forEach(
                d => {
                  if (d.idnmd == this.idetail) {
                    this.periodicite = d.periodicite.toString();
                    this.cot = d.cout.toLocaleString();
                    this.unt = d.unite.toString();
                  }
                }
              )
            }
          }
        }
      );

    //Process to hide 'valeur locative | recette brute'
    let tpExiste = false;
    this.listeNomenclature.forEach(
      d => {
        if ((this.taxe == d.idnom) && (d.recettebrute == 1)) {
          // ENABLE
          tpExiste = true;
          return;
        }
      }
    )
    if (tpExiste) {
      // ENABLE
      $("#recettebrute").prop("disabled", false);
    }
    else $("#recettebrute").prop("disabled", true); // Disable
  }

  onDisplayDetail(): void {
    // Request to get 'taxe'
    this.listeDetailNom.forEach(
      d => {
        if (d.idnmd == this.idetail) {
          this.periodicite = d.periodicite.toString();
          this.cot = d.cout.toLocaleString();
          this.unt = d.unite.toString();

          // If 'Superficie' is not set, set it by default :
          if (d.codeauvent == 1) {
            //if (this.idetail == 29 || this.idetail == 30) {
            // PLaces sous auvent : 29 
            // Places en dehors des auvents : 30 
            // Set a 'VALUE' :            
            this.superficie = this.listeSuperficie[1].idsup;
            // Set ODP = 'NON' and lock it
            this.odp = 0;
            //$("#taxeodp").prop("disabled", true); // Disable
            this.isOdpDisabled = true;
            //alert("OK");
          }
          else this.isOdpDisabled = false; // enable
          return;
        }
      }
    )
  }


  /**/
  getDataBack(idmag: string): void {
    this.meswebservices.getBienDataBack(idmag).toPromise()
      .then(
        resultat => {
          // Succes, Process :
          this.idmag = resultat.idmag;
          this.numero = resultat.numero.toString();
          this.denomination = resultat.denomination.toString();
          this.taxe = resultat.naturetaxe;
          this.idetail = resultat.detailtaxe;
          this.idsit = resultat.idsit;
          this.superficie = resultat.superficie;
          this.odp = resultat.odp;
          this.updateData = true;

          //
          this.dateService = new Date(resultat.dates.toString());
          // Valeur locative :
          this.recettebrute = resultat.valeurlocative.toString();

          // Refresh :
          //
          $('#myModal').modal();
          //this.onDisplayDetail();
          this.onTaxeChange();
        }
      )
  }

}
