import { Component, OnInit } from '@angular/core';
import { QueteResetPwd } from 'src/app/mesbeans/queteresetpwd';
import { MeswebservService } from 'src/app/messervices/meswebserv.service';

declare var $: any;

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  // Attributes :
  email = "";
  pwdOld = "";
  pwdNew = "";



  // Method:
  constructor(private meswebservices: MeswebservService) { }

  ngOnInit(): void {
  }


  enregistrer() {
    // Enregistrer MAIL :
    //alert("Email : "+this.email);
    document.getElementById("infos").innerHTML = "Veuillez patienter ...";
    var quete = new QueteResetPwd();
    quete.email = this.email.trim();
    quete.pwdnew = this.pwdNew.trim();
    quete.pwdold = this.pwdOld.trim(); 

    this.meswebservices.getresetpassword(quete).toPromise()
      .then(
        resultat => {
          // Succes
          if (resultat.element == "ok") {
            this.warnmessage("Votre mot de passe a été modifié !");
            document.getElementById("infos").innerHTML = "Votre mot de passe a été modifié !";
          }
          else{
            document.getElementById("infos").innerHTML = "Impossible de modifier le mot de passe ";
          }
        },
        (error) => {
          document.getElementById("infos").innerHTML = "Erreur : Veuillez vérifier l'adresse mail !";
        }
      )
  }


  warnmessage(information: string) {

    document.getElementById("infos").innerHTML = "";
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

}