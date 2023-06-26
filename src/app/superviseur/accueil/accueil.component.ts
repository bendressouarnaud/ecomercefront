import { Component, OnInit } from '@angular/core';
import { BeanDonneDevis } from 'src/app/mesbeans/beandonneedevis';
import { ClientBeanStatComAuto } from 'src/app/mesbeans/clientbeanstatcomauto';
import { StatsDevisUser } from 'src/app/mesbeans/statsdevisuser';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';
import { Chart } from 'node_modules/chart.js';
import ChartDataLabels from 'node_modules/chartjs-plugin-datalabels';
import { DataGrapheCours } from 'src/app/mesbeans/dataGrapheCours';
import { DonneTampon } from 'src/app/mesbeans/donnetampon';
import { ClientBeanStatComSante } from 'src/app/mesbeans/clientbeanstatcomsante';
import { Beanprojectionall } from 'src/app/mesbeans/beanprojectionall';

declare const $: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  // Attribute :   
  listeDevisAuto: ClientBeanStatComAuto[];
  listeDevisSante: ClientBeanStatComSante[];
  listeDevisAccident: ClientBeanStatComAuto[];
  listeDevisVoyage: ClientBeanStatComAuto[];
  listeDevisMrh: ClientBeanStatComAuto[];
  listeProjection: Beanprojectionall[];
  listeProjectionOdp: Beanprojectionall[];
  getProjection = false;
  getProjectionOdp = false;
  getDevisAuto = false;
  getDevisAccident = false;
  getDevisVoyage = false;
  getDevisMrh = false;
  getDevisSante = false;
  statsdevisuser = new StatsDevisUser();


  // Method
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    // Set DATA :
    this.statsdevisuser.auto = "0";
    this.statsdevisuser.accident = "0";
    this.statsdevisuser.voyage = "0";
    this.statsdevisuser.mrh = "0";
    this.statsdevisuser.sante = "0";
    this.statsdevisuser.total = "0";

    //
    /*this.getStatsFullDevisForManager();
    this.getDevisAutoByTrader();
    this.getDevisVoyageByTrader();
    this.getDevisAccidentByTrader();
    this.getDevisMrhByTrader();
    this.getDevisSanteByTrader();*/
    this.generateGrapheProjection();
    this.generatePieChartProjection();
    this.displayprojectionforall();
    this.displayprojectionodpforall();
    //this.getStatsDevisPieChartForManager();
  }



  // Get Statistiques DATA from All TEAM linked :
  getStatsFullDevisForManager() {
    this.meswebservices.getStatsFullDevisForManager().toPromise()
      .then(
        resultat => {
          this.statsdevisuser = resultat;
        },
        (error) => {
        }
      );
  }


  // Get DATA from AUTO devis :
  getDevisAutoByTrader() {
    this.meswebservices.getCommercialStatsHistoDevisAuto().toPromise()
      .then(
        resultat => {
          this.listeDevisAuto = resultat;
          this.getDevisAuto = true;
          this.initTableAuto();
          //this.separateurMillierOnTable();
        },
        (error) => {
          this.getDevisAuto = true;
          this.initTableAuto();
        }
      );
  }



  // Get DATA from SANTE devis :
  getDevisSanteByTrader() {
    this.meswebservices.getCommercialStatsHistoDevisSante().toPromise()
      .then(
        resultat => {
          this.listeDevisSante = resultat;
          this.getDevisSante = true;
          this.initTableSante();
          //this.separateurMillierOnTable();
        },
        (error) => {
          this.getDevisSante = true;
          this.initTableSante();
        }
      );
  }



  // Get DATA from VOYAGE devis :
  getDevisVoyageByTrader() {
    this.meswebservices.getCommercialHistoStatDevisVoyage().toPromise()
      .then(
        resultat => {
          this.listeDevisVoyage = resultat;
          this.getDevisVoyage = true;
          this.initTableVoyage();
          //this.separateurMillierOnTable();
        },
        (error) => {
          this.getDevisVoyage = true;
          this.initTableVoyage();
        }
      );
  }


  // Get DATA from Accident devis :
  getDevisAccidentByTrader() {
    this.meswebservices.getCommercialHistoStatDevisAccident().toPromise()
      .then(
        resultat => {
          this.listeDevisAccident = resultat;
          this.getDevisAccident = true;
          this.initTableAccident();
          //this.separateurMillierOnTable();
        },
        (error) => {
          this.getDevisAccident = true;
          this.initTableAccident();
        }
      );
  }


  // Get DATA from Mrh devis :
  getDevisMrhByTrader() {
    this.meswebservices.getCommercialHistoStatDevisMrh().toPromise()
      .then(
        resultat => {
          this.listeDevisMrh = resultat;
          this.getDevisMrh = true;
          this.initTableMrh();
          //this.separateurMillierOnTable();
        },
        (error) => {
          this.getDevisMrh = true;
          this.initTableMrh();
        }
      );
  }




  initTableSante() {
    setTimeout(function () {
      $('#datatableSante').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        },
        "order": [[4, "desc"]]
      });
    }, 500);
  }





  initTableMrh() {
    setTimeout(function () {
      $('#datatableMrh').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        },
        "order": [[4, "desc"]]
      });
    }, 500);
  }



  initTableAccident() {
    setTimeout(function () {
      $('#datatableAccident').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        },
        "order": [[4, "desc"]]
      });
    }, 500);
  }



  initTableAuto() {
    setTimeout(function () {
      $('#datatableAuto').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        },
        "order": [[4, "desc"]]
      });
    }, 500);
  }


  initTableVoyage() {
    setTimeout(function () {
      $('#datatableVoyage').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        },
        "order": [[4, "desc"]]
      });
    }, 500);
  }



  retourMois(mois: Number): string {
    var retour = "";

    if (mois == 1) retour = "Jan";
    else if (mois == 2) retour = "Fev";
    else if (mois == 3) retour = "Mar";
    else if (mois == 4) retour = "Avr";
    else if (mois == 5) retour = "Mai";
    else if (mois == 6) retour = "Jun";
    else if (mois == 7) retour = "Jul";
    else if (mois == 8) retour = "Aou";
    else if (mois == 9) retour = "Sep";
    else if (mois == 10) retour = "Oct";
    else if (mois == 11) retour = "Nov";
    else if (mois == 12) retour = "Dec";

    return retour;
  }



  generateGrapheProjection(): void {
    this.meswebservices.generateGrapheProjection().toPromise().then(
      resultat => {

        var tabDonnee = [];
        var tabAnnee = [];
        var tabMois = [];
        var tabLibMois = [];
        var tabCours = [];
        var tabCoursId = [];


        //
        for (var i = 0; i < resultat.length; i++) {

          var tampon: DataGrapheCours = new DataGrapheCours();
          // Now fill :
          tampon.cours = resultat[i].libelle.toString();
          tampon.mois = resultat[i].mois;
          tampon.libmois = this.retourMois(resultat[i].mois);
          var divi: number = 1000;
          tampon.tot = resultat[i].tot;
          var setRes = tampon.tot;
          tampon.tot = setRes / 1000;
          tampon.id = resultat[i].id;

          //
          if (tabCoursId.indexOf(resultat[i].id) == -1) {
            tabCoursId.push(resultat[i].id);
            tabCours.push(resultat[i].libelle.toString());
          }
          //
          if (tabMois.indexOf(resultat[i].mois) == -1) {
            tabMois.push(resultat[i].mois);
            tabLibMois.push(this.retourMois(resultat[i].mois));
          }

          //
          tabDonnee.push(tampon);
        }

        // Organize Ressources & Depot:
        var tabDataset = [];
        // Organize DTA per YEAR
        for (var j = 0; j < tabCoursId.length; j++) {  // tabSigle

          var tampons: DonneTampon = new DonneTampon();
          var mTableau = [];
          for (var l = 0; l < tabMois.length; l++) {  // tabAnnee            
            for (var k = 0; k < tabDonnee.length; k++) {

              if ((tabCoursId[j] == tabDonnee[k].id) && (tabMois[l] == tabDonnee[k].mois)) {
                tampons.sigle = tabDonnee[k].cours;
                mTableau.push(tabDonnee[k].tot);
                // 
                break;
              }
            }
          }

          //
          tampons.somme = new Array(mTableau.length);
          tampons.somme = mTableau;
          tabDataset.push(tampons);
        }


        var tabColueur = ["#FF0000", "#FF9E00", "#DFD20D", "#40C104", "#001BFF", "#4B0082",
          "#7F00FF", "#9E8138", "#6BAFAC", "#C6BC98", "#D7A2D4", "#BB8CF5", "#080808"];


        // Now, create a table to hold data :
        var tableHold = [];
        var cptColor = 0;
        for (var j = 0; j < tabDataset.length; j++) {
          if (!(tabDataset[j].sigle == "---")) {
            tableHold.push(
              {
                label: tabDataset[j].sigle,
                backgroundColor: tabColueur[cptColor],
                borderColor: tabColueur[cptColor],
                data: tabDataset[j].somme,
                borderWidth: 2,
                fill: false
              });
            cptColor++;
          }
        }


        //
        //var ctx = $('#chartsecteur');
        Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
          color: 'black',
          font: {
            weight: 'bold',
            size: 13
          }
        });
        var myChart = new Chart("chartequipe", {
          type: 'line',
          data: {
            labels: tabLibMois,
            datasets: tableHold
          },
          plugins: [ChartDataLabels],
          options: {
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                },
                display: true
              }],
              yAxes: [
                {
                  gridLines: {
                    display: true
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });



      }
    );
  }




  // Get Portfeuille :
  generatePieChartProjection(): void {
    this.meswebservices.generatePieChartProjection().toPromise().then(
      resultat => {

        var tabLibelle = [];
        var tabTotal = [];

        //
        for (var i = 0; i < resultat.length; i++) {
          tabLibelle.push(resultat[i].libelle);
          tabTotal.push((resultat[i].total));
        }

        let colorHex = [];
        var tabColueur = ["#11A907", "#0070FF", "#564E2D", "#D3810B", "#9F0BD3", "#FF0000",
          "#FF9E00", "#DFD20D", "#7F00FF", "#9E8138", "#6BAFAC", "#C6BC98", "#D7A2D4"];

        /*var tabColueur = ["#FF0000", "#FF9E00", "#DFD20D", "#40C104", "#001BFF", "#4B0082",
          "#7F00FF", "#9E8138", "#6BAFAC", "#C6BC98", "#D7A2D4", "#BB8CF5", "#080808"];*/
        for (let i = 0; i < tabColueur.length; i++) {
          colorHex[i] = tabColueur[i];
        }

        //let colorHex = ['#4B6281','#2C6FCA','#BBC0C8','#AABCD8'];
        //let colorHex = ['#2C6FCA','#a89907','#90908c','#AABCD8'];

        let myChart = new Chart("portefeuille", {
          type: 'pie',
          data: {
            datasets: [{
              data: tabTotal,
              backgroundColor: colorHex
            }],
            labels: tabLibelle
          },
          plugins: [ChartDataLabels],
          options: {
            responsive: true,
            legend: {
              position: 'bottom'
            },
            plugins: {
              datalabels: {
                display: true,
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -1,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 25,
                backgroundColor: (context) => {
                  return context.dataset.backgroundColor;
                },
                font: {
                  weight: 'bold',
                  size: '10'
                }/*,                
                formatter: (value, context) =>{
                  return context.chart.data.labels[context.dataIndex];
                },*/
                , formatter: (value) => {
                  return value + ' %';
                  //return value;
                }
              }
            }
          },


        });



      }
    );
  }


  /* Get PROJECTION */
  displayprojectionforall(): void {
    this.meswebservices.displayprojectionforall().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeProjection = resultat;
          }

          this.getProjection = true;
          setTimeout(function () {
            $('#datatableproj').DataTable({

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
              , "order": [[2, "desc"]]
            });
          }, 1000);
        }
      )
  }


  /* Get PROJECTION ODP */
  displayprojectionodpforall(): void {
    this.meswebservices.displayprojectionodpforall().toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.length > 0) {
            this.listeProjectionOdp = resultat;
          }

          this.getProjectionOdp = true;
          setTimeout(function () {
            $('#datatableproodp').DataTable({

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
              , "order": [[2, "desc"]]
            });
          }, 1000);
        }
      )
  }
}
