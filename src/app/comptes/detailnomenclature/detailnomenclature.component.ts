import { Component, OnInit } from '@angular/core';
import { Beandetailnom } from 'src/app/mesbeans/beandetailnom';
import { DetailNomenclature } from 'src/app/mesbeans/detailhistonomenclature';
import { Detailtable } from 'src/app/mesbeans/detailnomenclature';
import { Nomenclature } from 'src/app/mesbeans/nomenclature';
import { Periode } from 'src/app/mesbeans/periode';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare const $: any;

@Component({
  selector: 'app-detailnomenclature',
  templateUrl: './detailnomenclature.component.html',
  styleUrls: ['./detailnomenclature.component.css']
})
export class DetailnomenclatureComponent implements OnInit {

  // A t t r i b u t e s  :
  listeDetail: Beandetailnom[];
  listeNomenclature: Nomenclature[];
  getDetail: boolean = false;
  id = "0";  
  libelle = "";
  alreadyInit = false;
  idmot = 0;
  detailtable = new Detailtable();

  listePeriode: Periode[];
  cout = "0";
  unite = 1;
  periode = 0;


  // M e t h o d s :
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getAllNomenclatures();
    this.getInformation();
    this.getperiodes();
  }

  afficherDonnee(idnmd: string, detail: string, idnom: string, ct: string, unite:string) {
    this.detailtable.idnmd = parseInt(idnmd);
    this.detailtable.idnom = parseInt(idnom);
    this.detailtable.libelle = detail;
    this.cout = ct;
    this.detailtable.unite = unite.length > 1 ? 1 : 2;
    $('#myModal').modal();
  }

  ouvrirzonegestion(): void {
    // Open modal :
    this.detailtable.idnmd = 0;
    this.detailtable.idnom = 1;
    this.detailtable.unite = 1;
    this.detailtable.libelle = "";
    $('#myModal').modal();
  }

  //
  getAllNomenclatures(): void {
    this.meswebservices.getAllNomenclatures().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeNomenclature = resultat;
          }
        }
      )
  }

  /* Get All Activities */
  getInformation(): void {
    this.meswebservices.findAllDetailTables().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeDetail = resultat;
          }

          // Get it :
          this.getDetail = true;

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


  getperiodes(): void {
    this.meswebservices.getperiodes().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listePeriode = resultat;
            this.detailtable.periode = resultat[0].idper;
          }
        }
      )
  }


  // Save 
  enregistrer(): void {

    // Process cout :
    let ct = 0;
    try{
      ct = parseInt(this.cout);
    }
    catch (e) { }

    this.detailtable.cout = ct;
    this.meswebservices.enregistrerDetailNomenclature( this.detailtable ).toPromise().then(
      resultat => {
        if (resultat.element == "ok") {
          this.getInformation();
        }
      }
    )
  }



}
