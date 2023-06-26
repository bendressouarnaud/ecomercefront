import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field/form-field-control';
import { Mairie } from 'src/app/mesbeans/mairie';
import { Partenaire } from 'src/app/mesbeans/partenaire';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Produits } from 'src/app/mesbeans/produits';

declare const $: any;

@Component({
  selector: 'app-poduits',
  templateUrl: './poduits.component.html',
  styleUrls: ['./poduits.component.css']
})
export class PoduitsComponent implements OnInit {

  // A t t r i b u t e s  :
  liste: Produits[];
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
  libfichier = "";
  alreadyInit = false;
  idt = 0;
  formData = new FormData();

  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
    this.getAllProduits();
  }

  /*afficher(id: string) {
    this.liste.forEach(
      d => {
        if (d.ident == parseInt(id)) {
          this.id = id;
          this.libelle = d.libelle;
          this.contact = d.contact;
          this.email = d.email;
        }
      }
    )
    $('#myModal').modal();
  }*/

  ouvrirzonegestion(): void {
    // Open modal :
    this.libelle = "";
    this.contact = "";
    this.email = "";
    this.id = "0";
    $('#myModal').modal();
  }

  /* Get All Activities */
  getAllProduits(): void {
    this.meswebservices.getAllProduits().toPromise()
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
    this.formData.append("libelle", this.libelle);
    this.meswebservices.enregistrerProduit(this.formData).toPromise().then(
      resultat => {
        if (resultat.element == "OK") {
          location.reload();
        }
        else{
          this.warnmessage("Erreur de traitement !");
        }
      }
    )
  }


  onFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      if (this.formData.has("produit")) this.formData.delete("produit");
      this.formData.append("produit", file);
      this.libfichier = file.name;
    }
    else {
      if (this.formData.has("produit")) {
        this.formData.delete("produit");
      }
    }
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


  dispayImage() {
    // Create a reference from a Google Cloud Storage URI
    var storage = getStorage();
    //var gsReference = ref(storage, 'gs://gestionpanneaux.appspot.com');

    //getDownloadURL(ref(storage, 'gs://gestionpanneaux.appspot.com/33aa46aa-482a-4144-9e77-717b169a5af5.png'))
    getDownloadURL(ref(storage, 'gs://gestionpanneaux.appspot.com/produits/5f4fd3cf-9d62-41c7-9018-2a8ac5069962.jpeg'))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        // Or inserted into an <img> element
        //alert(url);
        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
      })
      .catch((error) => {
        alert("Error");
        // Handle any errors
      });
  }

}
