import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Gpsdata } from 'src/app/mesbeans/gpsdata';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  // Attributes
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  idmag = "0";
  gpsdata = new Gpsdata();

  // Methods
  constructor(private meswebservices: MeswebservService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Init :
    this.gpsdata.libelle = "";
    this.activatedRoute.params.subscribe((params: Params) => {
      // Get parameter :
      this.idmag = params['idmag'];
    });

    // Start :
    this.getMagasinPosition();
  }

  getMagasinPosition(): void {
    this.meswebservices.getMagasinPosition(this.idmag).toPromise()
      .then(
        resultat => {
          // Succes
          this.gpsdata = resultat;
        }
      )
  }
}
