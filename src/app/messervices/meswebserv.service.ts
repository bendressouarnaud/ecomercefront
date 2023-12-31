import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from "../mesbeans/utilisateur";
import { Reponse } from "../mesbeans/reponse";
import { ReponseUser } from "../mesbeans/reponseuser";
import { ReponseRdv } from "../mesbeans/reponserdv";
import { Profil } from "../mesbeans/profil";
import { RepGraphe } from "../mesbeans/repgraphe";
import { ReponseDonCom } from "../mesbeans/reponsedoncom";
import { Activite } from "../mesbeans/activite";
import { Rdv } from "../mesbeans/rdv";
import { Reprdv } from "../mesbeans/reprdv";
import { Rapport } from "../mesbeans/rapport";
import { Professeur } from "../mesbeans/professeur";
import { Responsable } from "../mesbeans/responsable";
import { Classe } from "../mesbeans/classe";
import { Uniteenseigne } from "../mesbeans/uniteenseigne";
import { Ecue } from "../mesbeans/ecue";
import { Lienrespue } from "../mesbeans/lienrespue";
import { Cours } from "../mesbeans/cours";
import { GrapheCours } from "../mesbeans/graphecours";
import { TeamAgenda } from "../mesbeans/teamagenda";
import { RapportComment } from "../mesbeans/rapportcomment";
import { RepRdvClient } from "../mesbeans/reprdvclient";
import { StatGen } from "../mesbeans/statgen";
import { Reunion } from "../mesbeans/reunion";
import { ReunionRest } from "../mesbeans/reunionrest";
import { Mois } from "../mesbeans/mois";
import { Annee } from "../mesbeans/annee";
import { Performance } from "../mesbeans/performance";
import { PerfRest } from "../mesbeans/reponseperform";
import { ReunionRestSup } from "../mesbeans/reunionrestsup";
import { UserLog } from "../mesbeans/userlogin";
import { ReunionObjet } from "../mesbeans/reunionobjet";
import { PerformanceObjet } from "../mesbeans/performanceobjet";
import { UserLogChg } from "../mesbeans/userloginchg";
import { Quete } from "../mesbeans/quete";
import { HistoRest } from "../mesbeans/historest";
import { MacRest } from "../mesbeans/macrest";
import { RdvComRest } from "../mesbeans/rdvcomrest";
import { RdvInfoRest } from "../mesbeans/rdvinforest";
import { UtilisateurInfo } from "../mesbeans/utilisateurinfo";
import { Detailequipe } from "../mesbeans/detailequipe";
import { RdvRetour } from "../mesbeans/rdvretour";
import { InvitationRequest } from "../mesbeans/invitationrequest";
import { NsiaTeam } from "../mesbeans/nsiateam";
import { ReponseUserFul } from "../mesbeans/reponseuserful";
import { ActivitecommercialeRest } from "../mesbeans/activitecommerciale";
import { DataGrapheCours } from "../mesbeans/dataGrapheCours";
import { PerfRestModif } from "../mesbeans/perfrestmodif";
import { Motif } from "../mesbeans/motif";
import { Nomenclature } from "../mesbeans/nomenclature";
import { Detailtable } from "../mesbeans/detailnomenclature";
import { DetailNomenclature } from "../mesbeans/detailhistonomenclature";
import { ClientRest } from "../mesbeans/clientrest";
import { HistoActivitecommerciale } from "../mesbeans/histoactivitecommerciale";
import { ParamWeb } from "../mesbeans/paramweb";
import { RestClient } from "../mesbeans/restclientcom";
import { RestPolice } from "../mesbeans/restpolice";
import { ReponseUserFulNew } from "../mesbeans/reponseuserfulnew";
import { Civilite } from "../mesbeans/civilite";
import { BeanDonneDevis } from "../mesbeans/beandonneedevis";
import { Clientbeanauto } from "../mesbeans/clientbeanauto";
import { StatsDevisUser } from "../mesbeans/statsdevisuser";
import { Indemnitemax } from "../mesbeans/indemnitemax";
import { Clientbeanaccident } from "../mesbeans/clientbeanaccident";
import { Zonedestination } from "../mesbeans/zonedestination";
import { Paysdestination } from "../mesbeans/paysdestination";
import { Clientbeanvoyage } from "../mesbeans/clientbeanvoyage";
import { Clientbeanmrh } from "../mesbeans/clientbeanmrh";
import { Motifpaiement } from "../mesbeans/motifpaiement";
import { Clientbeancheque } from "../mesbeans/clientbeancheque";
import { ClientBeanComAuto } from "../mesbeans/clientbeancomauto";
import { ClientBeanStatComAuto } from "../mesbeans/clientbeanstatcomauto";
import { BeanPortfolioDevis } from "../mesbeans/beanportfoliodevis";
import { Clientportefeuille } from "../mesbeans/clientportefeuille";
import { Clientbeansante } from "../mesbeans/clientbeansante";
import { Clientbeaninfosante } from "../mesbeans/clientbeaninfosante";
import { QueteResetPwd } from "../mesbeans/queteresetpwd";
import { ClientBeanComSante } from "../mesbeans/clientbeancomsante";
import { ClientBeanStatComSante } from "../mesbeans/clientbeanstatcomsante";
import { Clientbeansanteadherent } from "../mesbeans/clientbeansanteadherent";
import { Detailresumefamille } from "../mesbeans/detailresumefamille";
import { Detailconjoint } from "../mesbeans/detailconjoint";
import { Clientbeansantefamille } from "../mesbeans/clientbeansantefamille";
import { Detailenfant } from "../mesbeans/detailenfant";
import { Clientbeansanteadulte } from "../mesbeans/clientbeansanteadulte";
import { Activiteia } from "../mesbeans/activiteia";
import { Clientprofil } from "../mesbeans/clientprofil";
import { BeanClientRdvStat } from "../mesbeans/beanclientrdvstat";
import { RestClientFull } from "../mesbeans/restclientfull";
import { ClientFullRest } from "../mesbeans/clentrestnew";
import { BeanStatsDevis } from "../mesbeans/beanstatsdevis";
import { Marque } from "../mesbeans/marque";
import { Superficie } from "../mesbeans/superficie";
import { Situationzone } from "../mesbeans/situationzoone";
import { BeanMagasin } from "../mesbeans/beanmagasin";
import { BeanLocation } from "../mesbeans/beanlocation";
import { Periode } from "../mesbeans/periode";
import { Beandetailnom } from "../mesbeans/beandetailnom";
import { Magasin } from "../mesbeans/magasin";
import { Parametrage } from "../mesbeans/parametrage";
import { Graphe } from "../mesbeans/graphe";
import { Beanprojectionall } from "../mesbeans/beanprojectionall";
import { Beanpaymentstats } from "../mesbeans/beanpaymentstats";
import { Beanpaiementretard } from "../mesbeans/beanpaiementretard";
import { Beanexportjournal } from "../mesbeans/beanexportjournal";
import { Clientjournalier } from "../mesbeans/clientjournalier";
import { Gpsdata } from "../mesbeans/gpsdata";
import { Mairie } from "../mesbeans/mairie";
import { Partenaire } from "../mesbeans/partenaire";
import { Produits } from "../mesbeans/produits";
import { Beansousproduit } from "../mesbeans/beansousproduit";
import { Article } from "../mesbeans/article";
import { Sousproduit } from "../mesbeans/sousproduit";
import { Beandetail } from "../mesbeans/beandetail";
import { Detail } from "../mesbeans/detail";
import { BeanDetailModalite } from "../mesbeans/beandetailmodalite";
import { Beanpromotion } from "../mesbeans/beanpromotion";
import { BeanOngoingCommande } from "../mesbeans/beancommande";
import { BeanArticleCommande } from "../mesbeans/beanarticlecommande";
import { Beanapprobation } from "../mesbeans/beanapprobation";
import { BeanArticleUpdate } from "../mesbeans/beanarticleupdate";
import { Grossiste } from "../mesbeans/grossiste";
import { Client } from "../mesbeans/clientgouabo";
import { BeanDataLienGrossiste } from "../mesbeans/beandataliengrossiste";
import { BeanPaiementGrossiste } from "../mesbeans/beanpaiementgrossiste";
import { BeanLigneOccurence } from "../mesbeans/beanligneoccurence";

@Injectable({
    providedIn: 'root'
})


export class MeswebservService {

    /* Attributes */
    //private webserviceUri: String = "http://localhost:8080/backendcommerce";
    private webserviceUri: String = "https://ankkapp.com/backendcommerce";
    private mtoken = "";

    constructor(private httpclient: HttpClient) { }

    // Hold the token :
    setToken(token: string) {
        this.mtoken = token;
    }

    // take back the TOKEN :
    getToken(): string {
        return this.mtoken;
    }


    lookforAuthentication(userlog: UserLog): Observable<any> {
        return this.httpclient.post<any>(this.webserviceUri.concat("/authentification"), userlog, {});
    }

    suppraccount(userlog: UserLog): Observable<any> {
        return this.httpclient.post<any>(this.webserviceUri.concat("/suppraccount"), userlog, {});
    }

    /* Reset User Password */
    lookforPasswordReset(userlogchg: UserLogChg): Observable<any> {
        return this.httpclient.post<any>(this.webserviceUri.concat("/userpwdreset"), userlogchg, {});
    }

    // Commerciaux LISTE liste
    getAllProfesseurs(): Observable<Professeur[]> {
        return this.httpclient.get<Professeur[]>(this.webserviceUri.concat("/getAllProfesseurs"),
            {});
    }

    // Commerciaux LISTE liste
    getAllResponsables(): Observable<Responsable[]> {
        return this.httpclient.get<Responsable[]>(this.webserviceUri.concat("/getAllResponsables"),
            {});
    }


    // Commerciaux LISTE liste
    getAllClasses(): Observable<Classe[]> {
        return this.httpclient.get<Classe[]>(this.webserviceUri.concat("/getAllClasses"),
            {});
    }

    // Commerciaux LISTE liste
    getAllUe(): Observable<Uniteenseigne[]> {
        return this.httpclient.get<Uniteenseigne[]>(this.webserviceUri.concat("/getAllUe"),
            {});
    }

    // Commerciaux LISTE liste
    getAllEcue(): Observable<Reponse[]> {
        return this.httpclient.get<Reponse[]>(this.webserviceUri.concat("/getAllEcue"),
            {});
    }

    // Commerciaux LISTE liste
    getAllEcueObject(): Observable<Ecue[]> {
        return this.httpclient.get<Ecue[]>(this.webserviceUri.concat("/getAllEcueObject"),
            {});
    }

    // Commerciaux LISTE liste
    getAllLiens(): Observable<Reponse[]> {
        return this.httpclient.get<Reponse[]>(this.webserviceUri.concat("/getAllLiens"),
            {});
    }

    // Commerciaux LISTE liste
    getAllCours(): Observable<ReponseUser[]> {
        return this.httpclient.get<ReponseUser[]>(this.webserviceUri.concat("/getAllCours"),
            {});
    }

    // Commerciaux LISTE liste
    getAllusers(): Observable<ReponseUserFulNew[]> {
        return this.httpclient.get<ReponseUserFulNew[]>(this.webserviceUri.concat("/getAllusers"),
            {});
    }

    // Commercant
    getAllCommercants(): Observable<ReponseUserFulNew[]> {
        return this.httpclient.get<ReponseUserFulNew[]>(this.webserviceUri.concat("/getAllCommercants"),
            {});
    }

    // Journaliers
    getAllJournaliers(): Observable<Clientjournalier[]> {
        return this.httpclient.get<Clientjournalier[]>(this.webserviceUri.concat("/getAllJournaliers"),
            {});
    }

    // PROJECTION TAXE
    displayprojectionforall(): Observable<Beanprojectionall[]> {
        return this.httpclient.get<Beanprojectionall[]>(this.webserviceUri.concat("/displayprojectionforall"),
            {});
    }

    // PROJECTION ODP
    displayprojectionodpforall(): Observable<Beanprojectionall[]> {
        return this.httpclient.get<Beanprojectionall[]>(this.webserviceUri.concat("/displayprojectionodpforall"),
            {});
    }

    // Location 'MAGASIN' :
    getLocationMagasin(): Observable<BeanLocation[]> {
        return this.httpclient.get<BeanLocation[]>(this.webserviceUri.concat("/getLocationMagasin"),
            {});
    }

    // Get 'Utilisateur back'
    getusertoupdate(identifiant: string): Observable<ReponseUserFul[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', identifiant); // "commercial"
        return this.httpclient.get<ReponseUserFul[]>(this.webserviceUri.concat("/getusertoupdate"),
            {
                params: mesParams
            });
    }


    //  
    getCommercantBack(identifiant: string): Observable<ReponseUserFul> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', identifiant); // "commercial"
        return this.httpclient.get<ReponseUserFul>(this.webserviceUri.concat("/getCommercantBack"),
            {
                params: mesParams
            });
    }



    // Parametres de connexion :
    parametresconnexion(identifiant: string): Observable<ReponseUser[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', identifiant); // "commercial"
        return this.httpclient.get<ReponseUser[]>(this.webserviceUri.concat("/parametresconnexion"),
            {
                params: mesParams
            });
    }



    // Activities
    getAllActivities(): Observable<Activite[]> {
        return this.httpclient.get<Activite[]>(this.webserviceUri.concat("/getAllActivities"),
            {});
    }




    // Activities -- Accident
    getAllActivitiesAccident(): Observable<Activiteia[]> {
        return this.httpclient.get<Activiteia[]>(this.webserviceUri.concat("/getAllActivitiesAccident"),
            {});
    }


    // Detail equipe
    getAllDetailEquipe(): Observable<Detailequipe[]> {
        return this.httpclient.get<Detailequipe[]>(this.webserviceUri.concat("/getAllDetailEquipe"),
            {});
    }

    // Get motifs
    getAllMotifs(): Observable<Motif[]> {
        return this.httpclient.get<Motif[]>(this.webserviceUri.concat("/getmotifs"),
            {});
    }

    // Get superficies
    getAllSuperficie(): Observable<Superficie[]> {
        return this.httpclient.get<Superficie[]>(this.webserviceUri.concat("/getallsuperficie"),
            {});
    }


    // Get mairie
    getAllMairie(): Observable<Mairie[]> {
        return this.httpclient.get<Mairie[]>(this.webserviceUri.concat("/getallmairie"),
            {});
    }

    // Get 
    getAllPartenaies(): Observable<Partenaire[]> {
        return this.httpclient.get<Partenaire[]>(this.webserviceUri.concat("/getAllPartenaies"),
            {});
    }

    // Get 
    getAllGrossiste(): Observable<Grossiste[]> {
        return this.httpclient.get<Grossiste[]>(this.webserviceUri.concat("/getAllGrossiste"),
            {});
    }

    // Get 
    getAllClients(): Observable<Client[]> {
        return this.httpclient.get<Client[]>(this.webserviceUri.concat("/getAllClients"),
            {});
    }

    // Get Produits
    getAllProduits(): Observable<Produits[]> {
        return this.httpclient.get<Produits[]>(this.webserviceUri.concat("/getAllProduits"),
            {});
    }

    // Get Sous-Produits
    gethistoriquesproduits(): Observable<Beansousproduit[]> {
        return this.httpclient.get<Beansousproduit[]>(this.webserviceUri.concat("/gethistoriquesproduits"),
            {});
    }

    // Get DETAILS
    gethistoriquesdetails(): Observable<Beandetail[]> {
        return this.httpclient.get<Beandetail[]>(this.webserviceUri.concat("/gethistoriquesdetails"),
            {});
    }

    // Get Sous-Produits DATA :
    getsousproduitdata(): Observable<Sousproduit[]> {
        return this.httpclient.get<Sousproduit[]>(this.webserviceUri.concat("/getsousproduitdata"),
            {});
    }

    // Get ONLY Sous-Produits 'LIBs'
    getsousproduitlib(): Observable<Beansousproduit[]> {
        return this.httpclient.get<Beansousproduit[]>(this.webserviceUri.concat("/getsousproduitlib"),
            {});
    }


    // Get detail DATA :
    getAllDetails(): Observable<Detail[]> {
        return this.httpclient.get<Detail[]>(this.webserviceUri.concat("/getAllDetails"),
            {});
    }


    // Get situation zone
    getAllSituationzone(): Observable<Situationzone[]> {
        return this.httpclient.get<Situationzone[]>(this.webserviceUri.concat("/getallemplacement"),
            {});
    }

    // Get PAYMENTS STATS :
    getpaymentstatistics(): Observable<Beanpaymentstats> {
        return this.httpclient.get<Beanpaymentstats>(this.webserviceUri.concat("/getpaymentstatistics"),
            {});
    }

    getmagasinpaiementretard(): Observable<Beanpaiementretard[]> {
        return this.httpclient.get<Beanpaiementretard[]>(this.webserviceUri.concat("/getmagasinpaiementretard"),
            {});
    }

    getmagasinpaiementjour(): Observable<Beanpaiementretard[]> {
        return this.httpclient.get<Beanpaiementretard[]>(this.webserviceUri.concat("/getmagasinpaiementjour"),
            {});
    }

    getcurrentdayjournal(): Observable<Beanexportjournal[]> {
        return this.httpclient.get<Beanexportjournal[]>(this.webserviceUri.concat("/getcurrentdayjournal"),
            {});
    }

    // Get nomenclatures
    getAllNomenclatures(): Observable<Nomenclature[]> {
        return this.httpclient.get<Nomenclature[]>(this.webserviceUri.concat("/getnomenclatures"),
            {});
    }


    // Get Periodes
    getperiodes(): Observable<Periode[]> {
        return this.httpclient.get<Periode[]>(this.webserviceUri.concat("/getperiodes"),
            {});
    }

    // Get Articles
    getcompanyarticles(): Observable<Article[]> {
        return this.httpclient.get<Article[]>(this.webserviceUri.concat("/getcompanyarticles"),
            {});
    }


    // Get Lien Grosiste data
    getgrossisteliendata(): Observable<BeanDataLienGrossiste[]> {
        return this.httpclient.get<BeanDataLienGrossiste[]>(this.webserviceUri.concat("/getgrossisteliendata"),
            {});
    }


    // Get DETAILS for a particular COMPANY :
    getwebdetailbycompany(): Observable<Detail[]> {
        return this.httpclient.get<Detail[]>(this.webserviceUri.concat("/getwebdetailbycompany"),
            {});
    }

    // Get DETAILS MODALITE for a particular COMPANY :
    getwebdetailmodalitebycompany(): Observable<BeanDetailModalite[]> {
        return this.httpclient.get<BeanDetailModalite[]>(this.webserviceUri.concat("/getwebdetailmodalitebycompany"),
            {});
    }


    // Get PROMOTION for a particular COMPANY :
    getwebcompanypromotion(): Observable<Beanpromotion[]> {
        return this.httpclient.get<Beanpromotion[]>(this.webserviceUri.concat("/getwebcompanypromotion"),
            {});
    }


    // Get promotion elated to an ARTICLE :
    getarticlepromotion(donnees: FormData): Observable<BeanArticleUpdate> {
        return this.httpclient.post<BeanArticleUpdate>(this.webserviceUri.concat("/getarticlepromotion"), donnees, {});
    }

    // Get historique detail table 
    getAllHistoriqueDetailTable(): Observable<DetailNomenclature[]> {
        return this.httpclient.get<DetailNomenclature[]>(this.webserviceUri.concat("/gethistoriquenomenclature"),
            {});
    }


    // Get detail table 
    getAllDetailTable(): Observable<Detailtable[]> {
        return this.httpclient.get<Detailtable[]>(this.webserviceUri.concat("/getdetailnomenclatures"),
            {});
    }


    // Supprimer le collaborateur :
    supprimercollab(email: string): Observable<Reponse> {
        var queteObjet = new Quete();
        queteObjet.code = email;
        // 
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/dropmembrefromweb"), queteObjet, {});
    }


    // Get MAGASIN POSITION
    getMagasinPosition(id: string): Observable<Gpsdata> {
        var quete = new Quete();
        quete.code = id;
        // 
        return this.httpclient.post<Gpsdata>(this.webserviceUri.concat("/getmagasinposition"), quete, {});
    }


    // Transformer le prospect en client :
    prospectenclient(idcli: string): Observable<Reponse> {
        // DevisController :
        var queteObjet = new Quete();
        queteObjet.code = idcli;
        // 
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/prospectenclient"), queteObjet, {});
    }


    // Get CNI file :
    getcnipicture(idcli: string): Observable<Reponse> {
        // DevisController :
        var queteObjet = new Quete();
        queteObjet.code = idcli;
        // 
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/getcnipicture"), queteObjet, {});
    }


    // Get file :
    getclientpicture(idcli: string): Observable<any> {
        // DevisController :
        var queteObjet = new Quete();
        queteObjet.code = idcli;
        // 
        //return this.httpclient.post<Blob>(this.webserviceUri.concat("/getclientpicture"), queteObjet, {});
        return this.httpclient.get(this.webserviceUri.concat("/getclientpicture?idcli=" + idcli), { responseType: 'blob' });
    }


    // Activer le compte :
    activercompteuser(email: string): Observable<Reponse> {
        var queteObjet = new Quete();
        queteObjet.code = email;
        // 
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/activercompteuser"), queteObjet, {});
    }


    // Desactiver le compte :
    desactiverlecompte(email: string): Observable<Reponse> {
        var queteObjet = new Quete();
        queteObjet.code = email;
        // 
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/desactiverlecompte"), queteObjet, {});
    }


    // Obtenir le mot de passe :
    getbackpassword(email: string): Observable<Reponse> {
        var queteObjet = new Quete();
        queteObjet.code = email;
        // 
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/getbackpassword"), queteObjet, {});
    }


    // Changez son mot de passe :
    getresetpassword(objet: QueteResetPwd): Observable<Reponse> {
        // 
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/getresetpassword"), objet, {});
    }


    // Commerciaux LISTE liste
    getusersbyprofil(profil: string): Observable<ReponseUser[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('code', profil); // "commercial"
        return this.httpclient.get<ReponseUser[]>(this.webserviceUri.concat("/getusersbyprofil"),
            {
                params: mesParams
            });
    }

    // Commerciaux LISTE liste
    getusersbyprofilandid(profil: string): Observable<Utilisateur[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('code', profil); // "commercial"
        //mesParams = mesParams.append('userid', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<Utilisateur[]>(this.webserviceUri.concat("/getusersbyprofilandid"),
            {
                params: mesParams
            });
    }

    // Liste des RDVs
    getrdvliste(): Observable<ReponseRdv[]> {

        return this.httpclient.get<ReponseRdv[]>(this.webserviceUri.concat("/getlisterdv"),
            {});

    }

    // Liste des RAPPORTs
    getrapportliste(): Observable<ReponseRdv[]> {

        return this.httpclient.get<ReponseRdv[]>(this.webserviceUri.concat("/getlisterapport"),
            {});

    }

    // Liste des RAPPORTs lié à un superviseur :
    getrapportlistesuper(): Observable<ReponseRdv[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<ReponseRdv[]>(this.webserviceUri.concat("/getlisterapportbysuper"),
            {
                //params : mesParams
            });
    }


    // Liste des RAPPORTs lié à un commercial  :
    getTraderReportInspecteur(): Observable<ReponseRdv[]> {

        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<ReponseRdv[]>(this.webserviceUri.concat("/getTraderReportInspecteur"),
            {
                params: mesParams
            });

    }


    // Liste des RAPPORTs lié à un commercial  :
    getTraderReportManager(): Observable<RepRdvClient[]> {

        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<RepRdvClient[]>(this.webserviceUri.concat("/getTraderReportManager"),
            {
                //params : mesParams
            });

    }


    // Liste des CLIENTS rattachés à un commercial  :
    getclientportfeuille(): Observable<Clientportefeuille[]> {
        return this.httpclient.get<Clientportefeuille[]>(this.webserviceUri.concat("/getclientportfeuille"), {});
    }


    // Liste des CLIENTS rattachés à un commercial  :
    getreseauxsociauxmycustomers(): Observable<Clientportefeuille[]> {
        return this.httpclient.get<Clientportefeuille[]>(this.webserviceUri.concat("/getclientreseauxsociauxportfeuille"), {});
    }


    // Liste des RAPPORTs lié à un commercial  :
    getTraderReportDirector(): Observable<RepRdvClient[]> {
        //  
        return this.httpclient.get<RepRdvClient[]>(this.webserviceUri.concat("/getTraderReportDirector"),
            {});

    }



    // Liste des RAPPORTs lié à un commercial  :
    getSuperviseurReportInspecteur(): Observable<ReponseRdv[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<ReponseRdv[]>(this.webserviceUri.concat("/getSuperviseurReportInspecteur"),
            {
                //params : mesParams
            });
    }


    // Liste des RAPPORTs lié à un commercial  :
    getSuperviseurReportManager(): Observable<RepRdvClient[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<RepRdvClient[]>(this.webserviceUri.concat("/getSuperviseurReportManager"),
            {
                //params : mesParams
            });
    }


    // 
    getSuperviseurReportDirector(): Observable<RepRdvClient[]> {
        // 
        return this.httpclient.get<RepRdvClient[]>(this.webserviceUri.concat("/getSuperviseurReportDirector"),
            {});
    }



    // Liste des RAPPORTs lié à un commercial  :
    getInspecteurReportManager(): Observable<RepRdvClient[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<RepRdvClient[]>(this.webserviceUri.concat("/getInspecteurReportManager"),
            {
                //params : mesParams
            });
    }


    // 
    getInspecteurReportDirector(): Observable<RepRdvClient[]> {
        // 
        return this.httpclient.get<RepRdvClient[]>(this.webserviceUri.concat("/getInspecteurReportDirector"),
            {});
    }


    // 
    getManagerReportDirector(): Observable<RepRdvClient[]> {
        // 
        return this.httpclient.get<RepRdvClient[]>(this.webserviceUri.concat("/getManagerReportDirector"),
            {});
    }


    // Liste des PROFILs
    getprofiliste(): Observable<Profil[]> {

        return this.httpclient.get<Profil[]>(this.webserviceUri.concat("/getprofiliste"),
            {});

    }


    // Liste des MAGASINS   :  getallmagasinsnotlocated   getallmagasins
    getallmagasins(): Observable<BeanMagasin[]> {
        return this.httpclient.get<BeanMagasin[]>(this.webserviceUri.concat("/getallmagasinsnotlocated"),
            {});
    }


    getallmagasinsnotlocated(): Observable<BeanMagasin[]> {
        return this.httpclient.get<BeanMagasin[]>(this.webserviceUri.concat("/obtenirmagasinnonloues"),
            {});
    }


    // Liste des PROFILs
    getprofilisteBySelection(liste: string): Observable<UtilisateurInfo[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('liste', liste);
        return this.httpclient.get<UtilisateurInfo[]>(this.webserviceUri.concat("/getusersusingprofilid"),
            {
                params: mesParams
            });
    }


    // get the name of the BOSS :
    getbossname(): Observable<ReponseUser[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant"));
        return this.httpclient.get<ReponseUser[]>(this.webserviceUri.concat("/getbossname"),
            {
                //params : mesParams
            });
    }



    // Send the report :
    soumissioncommentairerap(commentaire: string, id: Number): Observable<Reponse> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('commentaire', commentaire);
        mesParams = mesParams.append('id', id.toString());
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant"));
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/savereportcomment"),
            {
                params: mesParams
            });
    }

    // Save the new user :
    enregistrerUser(nom: String, prenom: String, contact: String, email: String,
        profil: Number): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', nom.toString());
        mesParams = mesParams.append('prenom', prenom.toString());
        mesParams = mesParams.append('contact', contact.toString());
        mesParams = mesParams.append('email', email.toString());
        mesParams = mesParams.append('profil', profil.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerUser"),
            {
                params: mesParams
            });
    }


    // Save the new user :
    enregistrerAdminUser(nom: String, prenom: String, contact: String, email: String,
        profil: Number, ident: Number): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', nom.toString());
        mesParams = mesParams.append('prenom', prenom.toString());
        mesParams = mesParams.append('contact', contact.toString());
        mesParams = mesParams.append('email', email.toString());
        mesParams = mesParams.append('profil', profil.toString());
        mesParams = mesParams.append('ident', ident.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerAdminUser"),
            {
                params: mesParams
            });
    }


    // Save the new user :
    enregistrerMagasin(idmag: number, numero: String, idsit: number, superficie: number
        , denomination: String, taxe: number, idetail: number, odp: number, dates: string,
        valeurlocative: string): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idmag', idmag.toString());
        mesParams = mesParams.append('numero', numero.toString());
        mesParams = mesParams.append('idsit', idsit.toString());
        mesParams = mesParams.append('superficie', superficie.toString());
        // NEW 
        mesParams = mesParams.append('denomination', denomination.toString());
        mesParams = mesParams.append('taxe', taxe.toString());
        mesParams = mesParams.append('idetail', idetail.toString());
        mesParams = mesParams.append('odp', odp.toString());
        mesParams = mesParams.append('dates', dates);
        mesParams = mesParams.append('valeurlocative', valeurlocative);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerMagasin"),
            {
                params: mesParams
            });
    }


    // Save the new user :
    enregistrerLocation(idmag: number, idcom: string, idloc: number, dates: string): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idmag', idmag.toString());
        mesParams = mesParams.append('idcom', idcom);
        mesParams = mesParams.append('idloc', idloc.toString());
        mesParams = mesParams.append('dates', dates);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerLocation"),
            {
                params: mesParams
            });
    }


    // Save the new CLIENT :
    enregistrerClient(nom: String, prenom: String, contact: String, email: String, id: String): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', nom.toString());
        mesParams = mesParams.append('prenom', prenom.toString());
        mesParams = mesParams.append('contact', contact.toString());
        mesParams = mesParams.append('email', email.toString());
        mesParams = mesParams.append('id', id.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerClient"),
            {
                params: mesParams
            });
    }


    // Modifiy user :
    modifierUser(nom: String, prenom: String, contact: String, email: String,
        profil: Number, identifiant: String): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', nom.toString());
        mesParams = mesParams.append('prenom', prenom.toString());
        mesParams = mesParams.append('contact', contact.toString());
        mesParams = mesParams.append('email', email.toString());
        mesParams = mesParams.append('profil', profil.toString());
        mesParams = mesParams.append('identifiant', identifiant.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/modifierUser"),
            {
                params: mesParams
            });
    }


    // Modifiy user :
    modifierAdminUser(nom: String, prenom: String, contact: String, email: String,
        profil: Number, mairie: Number,identifiant: String): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', nom.toString());
        mesParams = mesParams.append('prenom', prenom.toString());
        mesParams = mesParams.append('contact', contact.toString());
        mesParams = mesParams.append('email', email.toString());
        mesParams = mesParams.append('profil', profil.toString());
        mesParams = mesParams.append('identifiant', identifiant.toString());
        mesParams = mesParams.append('mairie', mairie.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/modifierAdminUser"),
            {
                params: mesParams
            });
    }


    // Save Activite:
    enregistrerAct(libelle: String, etat: String): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', libelle.toString());
        mesParams = mesParams.append('etat', etat.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerAct"),
            {
                params: mesParams
            });
    }



    // Save Detail:
    enregistrerDet(libelle: String): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', libelle.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerDet"),
            {
                params: mesParams
            });
    }



    // Save Motif:
    enregistrerMotif(libelle: String, idmot: string): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', libelle.toString());
        mesParams = mesParams.append('idmot', idmot.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerMotif"),
            {
                params: mesParams
            });
    }


    // Save Superficie:
    enregistrerSuperficie(libelle: String, id: string, montant: string): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', libelle.toString());
        mesParams = mesParams.append('idsup', id.toString());
        mesParams = mesParams.append('montant', montant.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerSuperficie"),
            {
                params: mesParams
            });
    }


    // Save Mairie:
    enregistrerMairie(libelle: String, id: string, code: string, cleapi: string, idsite: string
        , monnaie: string): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', libelle.toString());
        mesParams = mesParams.append('idmai', id.toString());
        mesParams = mesParams.append('code', code);
        //-------
        mesParams = mesParams.append('cleapi', cleapi);
        mesParams = mesParams.append('idsite', idsite);
        mesParams = mesParams.append('monnaie', monnaie);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerMairie"),
            {
                params: mesParams
            });
    }


    // Save Partenaire:
    enregistrerPartenaire(id: string, libelle: String, contact: string, email: string): Observable<Reponse> {
        let mesParams = new HttpParams();        
        mesParams = mesParams.append('ident', id.toString());
        mesParams = mesParams.append('libelle', libelle.toString());
        mesParams = mesParams.append('contact', contact);
        mesParams = mesParams.append('email', email);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerPartenaire"),
            {
                params: mesParams
            });
    }


    // Save Grossiste:
    enregistrerGrossiste(id: string, libelle: String, contact: string, email: string): Observable<Reponse> {
        let mesParams = new HttpParams();        
        mesParams = mesParams.append('id', id.toString());
        mesParams = mesParams.append('denomination', libelle.toString());
        mesParams = mesParams.append('contact', contact);
        mesParams = mesParams.append('email', email);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerGrossiste"),
            {
                params: mesParams
            });
    }


    // Save Partenaire:
    enregistrerProduit(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/savepoducts"), donnees, {});
    }

    // Save Sous-Produit:
    enregistrerSousProduit(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/savesouspoducts"), donnees, {});
    }

    // Save DETAIL:
    enregistrerDetail(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/savedetails"), donnees, {});
    }

    // Save Article:
    enregistrerArticle(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/savearticles"), donnees, {});
    }

    // Send message:
    sendWordToRead(donnees: FormData): Observable<BeanLigneOccurence[]> {
        return this.httpclient.post<BeanLigneOccurence[]>(this.webserviceUri.concat("/sendWordToRead"), donnees, {});
    }

    // Save Article:
    enregistrerForfaitGrosssiste(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/savegrossisteprice"), donnees, {});
    }

    // Save Article & Promotion:
    enregistrerArticleAndPromotion(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/savearticleandpromotion"), donnees, {});
    }

    // Save MODALITE:
    enregistrerModalite(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/savemodalites"), donnees, {});
    }

    // Save MODALITE:
    enregistrerPromotion(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/savepromotion"), donnees, {});
    }

    // Save Emplacement:
    enregistrerEmplacement(libelle: String, id: string): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', libelle.toString());
        mesParams = mesParams.append('idsit', id.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerEmplacement"),
            {
                params: mesParams
            });
    }


    // Save Nomenclature :
    enregistrerNomenclature(libelle: String, idnom: string): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', libelle.toString());
        mesParams = mesParams.append('idnom', idnom.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerNomenclature"),
            {
                params: mesParams
            });
    }


    // Save Periode :
    enregistrerPeriode(libelle: String, id: string, frequence: string, codes: string, jour: string): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', libelle.toString());
        mesParams = mesParams.append('id', id);
        mesParams = mesParams.append('frequence', frequence);
        mesParams = mesParams.append('codes', codes);
        mesParams = mesParams.append('jour', jour);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerPeriode"),
            {
                params: mesParams
            });
    }


    // Send the report :
    enregistrerDetailNomenclature(detailtable: Detailtable): Observable<Reponse> {
        // User ID :
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/enregistrerDetailNomenclature"), detailtable, {});
    }


    // Save Activite:
    enregistrerProf(professeur: Professeur): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', professeur.nom);
        mesParams = mesParams.append('prenom', professeur.prenom);
        mesParams = mesParams.append('contact', professeur.contact);
        mesParams = mesParams.append('email', professeur.email);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerProf"),
            {
                params: mesParams
            });
    }

    // Save Activite:
    enregistrerRes(responsable: Responsable): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', responsable.nom);
        mesParams = mesParams.append('prenom', responsable.prenom);
        mesParams = mesParams.append('contact', responsable.contact);
        mesParams = mesParams.append('email', responsable.email);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerResp"),
            {
                params: mesParams
            });
    }


    // Save Activite:
    enregistrerCl(classe: Classe): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', classe.libelle);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerClass"),
            {
                params: mesParams
            });
    }


    // Save Activite:
    enregistrerUe(ue: Uniteenseigne): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', ue.libelle);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerUe"),
            {
                params: mesParams
            });
    }

    // Save Activite:
    enregistrerEcue(ecue: Ecue): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('libelle', ecue.libelle);
        mesParams = mesParams.append('ue', ecue.idue.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerEcue"),
            {
                params: mesParams
            });
    }


    // Save Activite:
    enregistrerLienrespue(lienrespue: Lienrespue): Observable<Reponse> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idres', lienrespue.idres.toString());
        mesParams = mesParams.append('ue', lienrespue.idue.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerLienrespue"),
            {
                params: mesParams
            });
    }



    // Send the report :
    adduserhierarchie(identifiant: string): Observable<Reponse> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('useridentifiant', identifiant);
        mesParams = mesParams.append('bossid', localStorage.getItem("identifiant"));
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/adduserhierarchie"),
            {
                params: mesParams
            });
    }


    getrepgraphe(): Observable<RepGraphe[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('id', localStorage.getItem("identifiant"));
        return this.httpclient.get<RepGraphe[]>(this.webserviceUri.concat("/generateRdvGrapheId"),
            {
                //params : mesParams
            });
    }


    getcommercialrdvchart(): Observable<RepGraphe[]> {
        // Traitement controller
        return this.httpclient.get<RepGraphe[]>(this.webserviceUri.concat("/getcommercialrdvchart"), {});
    }


    getcommercialdevischart(): Observable<RepGraphe[]> {
        // Traitement controller
        return this.httpclient.get<RepGraphe[]>(this.webserviceUri.concat("/getcommercialdevischart"), {});
    }


    getStatSectorbyComChart(): Observable<DataGrapheCours[]> {
        // 
        return this.httpclient.get<DataGrapheCours[]>(this.webserviceUri.concat("/getStatSectorbyComChart"), {});
    }

    //
    getTeamRdvStatbyManager(): Observable<DataGrapheCours[]> {
        // Traitement
        return this.httpclient.get<DataGrapheCours[]>(this.webserviceUri.concat("/getTeamRdvStatbyManager"), {});
    }


    //
    getTeamDevisStatbyManager(): Observable<DataGrapheCours[]> {
        // ApiCallController
        return this.httpclient.get<DataGrapheCours[]>(this.webserviceUri.concat("/getTeamDevisStatbyManager"), {});
    }


    //
    generateGrapheProjection(): Observable<Graphe[]> {
        // ApiCallController
        return this.httpclient.get<Graphe[]>(this.webserviceUri.concat("/generateGrapheProjection"), {});
    }


    //
    getStatsDevisPieChartForManager(): Observable<BeanPortfolioDevis[]> {
        // DevisController
        return this.httpclient.get<BeanPortfolioDevis[]>(this.webserviceUri.concat("/getStatsDevisPieChartForManager"), {});
    }


    generatePieChartProjection(): Observable<BeanPortfolioDevis[]> {
        // DevisController
        return this.httpclient.get<BeanPortfolioDevis[]>(this.webserviceUri.concat("/generatePieChartProjection"), {});
    }


    //
    getStatsDevisPieChartForTresorier(): Observable<BeanPortfolioDevis[]> {
        // DevisController
        return this.httpclient.get<BeanPortfolioDevis[]>(this.webserviceUri.concat("/getStatsDevisPieChartForTresorier"), {});
    }


    // Devis PAYé
    getStatsDevisPayePieChartForTresorier(): Observable<BeanPortfolioDevis[]> {
        // DevisController
        return this.httpclient.get<BeanPortfolioDevis[]>(this.webserviceUri.concat("/getStatsDevisPayePieChartForTresorier"), {});
    }


    //
    getDevisCreatedforYearForTresorier(): Observable<DataGrapheCours[]> {
        // ApiCallController
        return this.httpclient.get<DataGrapheCours[]>(this.webserviceUri.concat("/getDevisCreatedforYearForTresorier"), {});
    }


    // Bar CHART for devis PAYés
    getDevisPayeforYearForTresorier(): Observable<DataGrapheCours[]> {
        // ApiCallController
        return this.httpclient.get<DataGrapheCours[]>(this.webserviceUri.concat("/getDevisPayeforYearForTresorier"), {});
    }


    getgraphecours(): Observable<RepGraphe[]> {
        // 
        return this.httpclient.get<RepGraphe[]>(this.webserviceUri.concat("/generateGrapheCours"),
            {});
    }


    generateGrapheManager(): Observable<StatGen[]> {
        // 
        return this.httpclient.get<StatGen[]>(this.webserviceUri.concat("/generateGrapheManager"),
            {});
    }

    grapheCoursmois(): Observable<GrapheCours[]> {
        // 
        return this.httpclient.get<GrapheCours[]>(this.webserviceUri.concat("/grapheCoursmois"),
            {});
    }


    getsuperviseurptbyid(): Observable<ReponseDonCom> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('userid', localStorage.getItem("identifiant"));
        return this.httpclient.get<ReponseDonCom>(this.webserviceUri.concat("/getsuperviseurptbyid"),
            {
                //params : mesParams
            });
    }



    getadministratorstats(): Observable<ReponseDonCom> {
        // 
        return this.httpclient.get<ReponseDonCom>(this.webserviceUri.concat("/getadministratorstats"), {});
    }




    // Stat. Manager :
    getstatmanager(): Observable<ReponseDonCom> {
        return this.httpclient.get<ReponseDonCom>(this.webserviceUri.concat("/getstatmanager"),
            {});
    }


    // Save Activite:
    enregistrerRapport(rapport: Rapport): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('actions', rapport.actions.toString());
        mesParams = mesParams.append('contenu', rapport.contenu.toString());
        mesParams = mesParams.append('idrdv', rapport.idrdv.toString());
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerRapport"),
            {
                params: mesParams
            });
    }


    // Save Activite:
    enregistrerRapportReunion(rapport: string, idreunion: string): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('rapport', rapport);
        mesParams = mesParams.append('idreu', idreunion);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerRapportreunion"),
            {
                params: mesParams
            });
    }


    // Save Activite:
    enregistrerRdv(rdv: Rdv, dates: string): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', rdv.nom.toString());
        mesParams = mesParams.append('contact', rdv.contact.toString());
        mesParams = mesParams.append('email', rdv.email.toString());
        mesParams = mesParams.append('activite', rdv.activite.toString());
        mesParams = mesParams.append('dates', dates);
        mesParams = mesParams.append('heure', rdv.heure.toString());
        mesParams = mesParams.append('categorie', rdv.categorie.toString());
        mesParams = mesParams.append('qualite', rdv.qualite.toString());
        mesParams = mesParams.append('superviseur', rdv.superviseur.toString());
        mesParams = mesParams.append('resume', rdv.resume.toString());
        mesParams = mesParams.append('etat', "1");
        mesParams = mesParams.append('idcom', localStorage.getItem("identifiant"));
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerRdv"),
            {
                params: mesParams
            });
    }



    // Save Activite:
    enregistrerCours(cours: Cours, dates: string): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('idcl', cours.idcl.toString());
        mesParams = mesParams.append('idecue', cours.idecue.toString());
        mesParams = mesParams.append('idprof', cours.idprof.toString());
        mesParams = mesParams.append('temps', cours.temps.toString());
        mesParams = mesParams.append('dates', dates);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/enregistrerCours"),
            {
                params: mesParams
            });
    }


    // Save Activite:
    modifierRdv(rdv: Rdv, dates: string): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('nom', rdv.nom.toString());
        mesParams = mesParams.append('contact', rdv.contact.toString());
        mesParams = mesParams.append('email', rdv.email.toString());
        mesParams = mesParams.append('activite', rdv.activite.toString());
        mesParams = mesParams.append('dates', dates);
        mesParams = mesParams.append('heure', rdv.heure.toString());
        mesParams = mesParams.append('categorie', rdv.categorie.toString());
        mesParams = mesParams.append('qualite', rdv.qualite.toString());
        mesParams = mesParams.append('superviseur', rdv.superviseur.toString());
        mesParams = mesParams.append('resume', rdv.resume.toString());
        mesParams = mesParams.append('etat', "1");
        mesParams = mesParams.append('idrdv', rdv.idrdv.toString());
        mesParams = mesParams.append('idcom', localStorage.getItem("identifiant"));
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/modifierRdv"),
            {
                params: mesParams
            });
    }


    // Liste des RAPPORTs lié à un superviseur :
    getRdvByCommercial(): Observable<Reprdv[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<Reprdv[]>(this.webserviceUri.concat("/getrdvbycommercial"),
            {
                //params : mesParams
            });
    }


    // Liste des ACTIVITES COMMERCIALES :
    getActiviteComByCommercial(): Observable<HistoActivitecommerciale[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<HistoActivitecommerciale[]>(this.webserviceUri.concat("/getactivitecombycommercial"),
            {
                //params : mesParams
            });
    }


    // Liste des ACTIVITES COMMERCIALES vues par le manager sur ses agents directs :
    getactivitecomformanager(): Observable<HistoActivitecommerciale[]> {
        // Traitement Controller : 
        return this.httpclient.get<HistoActivitecommerciale[]>(this.webserviceUri.concat("/getactivitecomformanager"), {});
    }


    // Liste des ACTIVITES COMMERCIALES pour lesquelles nous sommes RESPONSABLE ou CHEF D'EQUIPE:
    getActiviteWeAreCalledOn(): Observable<HistoActivitecommerciale[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<HistoActivitecommerciale[]>(this.webserviceUri.concat("/getActiviteWeAreCalledOn"),
            {
                //params : mesParams
            });
    }


    // Liste des RAPPORTs lié à un superviseur :
    getReunionByCommercial(): Observable<ReunionRest[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<ReunionRest[]>(this.webserviceUri.concat("/getReunionByCommercial"),
            {
                //params : mesParams
            });
    }


    // Obtenir un RDV :
    getSpecificRdv(idrdv: string): Observable<Rdv> {

        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('id', idrdv); // 
        return this.httpclient.get<Rdv>(this.webserviceUri.concat("/getbackrd"),
            {
                params: mesParams
            });
    }




    // Delete a RDV :
    deleterdvid(idrdv: string): Observable<Reponse> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idrdv', idrdv); // 
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/deleterdvid"),
            {
                params: mesParams
            });
    }




    // Delete a RDV :
    getUserContact(idrdv: string): Observable<Reponse> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idrdv', idrdv); // 
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/getUserContact"),
            {
                params: mesParams
            });
    }





    //
    getSpecificRdvFull(idrdv: string): Observable<RdvRetour> {

        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('id', idrdv); // 
        return this.httpclient.get<RdvRetour>(this.webserviceUri.concat("/getbackrdfull"),
            {
                params: mesParams
            });
    }


    // Obtenir un REUNION :
    getSpecificReunion(id: string): Observable<Reunion> {

        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('id', id); // 
        return this.httpclient.get<Reunion>(this.webserviceUri.concat("/getbackreunion"),
            {
                params: mesParams
            });
    }


    // Obtenir un RDV :
    getbackallrdv(): Observable<Rdv[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<Rdv[]>(this.webserviceUri.concat("/getbackallrdv"),
            {
                //params : mesParams
            });
    }


    // get TEAM's agenda  :
    getTeamAgenda(team: string): Observable<TeamAgenda[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        //mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        mesParams = mesParams.append('team', team); // 
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/geteamagenda"),
            {
                params: mesParams
            });
    }


    // get TEAM's agenda  :
    geTraderagendabyinsp(): Observable<TeamAgenda[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant"));
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getraderagendabyinsp"),
            {
                //params : mesParams
            });
    }


    // get TEAM's agenda  :
    getraderagendabymanag(): Observable<TeamAgenda[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant"));
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getraderagendabymanag"),
            {
                params: mesParams
            });
    }

    getraderagendabydirector(): Observable<TeamAgenda[]> {
        // 
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getraderagendabydirector"),
            {});
    }


    //
    getsupervagendabymanag(): Observable<TeamAgenda[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant"));
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getsupervagendabymanag"),
            {
                //params : mesParams
            });
    }

    //
    getsupervagendabydirector(): Observable<TeamAgenda[]> {
        // 
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getsupervagendabydirector"),
            {});
    }


    getinspecagendabymanag(): Observable<TeamAgenda[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant"));
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getinspecagendabymanag"),
            {
                //params : mesParams
            });
    }

    // 
    getinspecagendabydirector(): Observable<TeamAgenda[]> {
        //
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getinspecagendabydirector"),
            {});
    }


    // 
    getManagerAgendaByDirector(): Observable<TeamAgenda[]> {
        //
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getManagerAgendaByDirector"),
            {});
    }



    // get TEAM's agenda  :
    getSupervAgendabyinsp(): Observable<TeamAgenda[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant"));
        return this.httpclient.get<TeamAgenda[]>(this.webserviceUri.concat("/getsupervagendabyinsp"),
            {
                //params : mesParams
            });
    }


    // Obtenir un RDV :
    getSpecificRapport(idrdv: string): Observable<Rapport> {

        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('id', idrdv); // 
        return this.httpclient.get<Rapport>(this.webserviceUri.concat("/getbackrapport"),
            {
                params: mesParams
            });
    }


    // Obtenir une fiche de VISISTE :
    getFicheVisite(idrdv: string): Observable<any> {
        // 
        return this.httpclient.get(this.webserviceUri.concat("/getfichevisite?idrdv=" + idrdv), { responseType: 'blob' });
    }


    // Liste des RAPPORTs lié à un superviseur :
    getRapportByCommercial(): Observable<Rapport[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<Rapport[]>(this.webserviceUri.concat("/getRapportByCommercial"),
            {
                //params : mesParams
            });
    }


    // Liste des RAPPORTs lié à un superviseur :
    getReportByCommercial(): Observable<RapportComment[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<RapportComment[]>(this.webserviceUri.concat("/getRapportByCommercial"),
            {
                params: mesParams
            });
    }

    getFullUsers(): Observable<ReponseUser[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('id', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<ReponseUser[]>(this.webserviceUri.concat("/getFullUsers"),
            {
                //params : mesParams
            });
    }


    //
    // Send the report :
    enregistrereunion(reunion: Reunion, dates: string): Observable<Reponse> {
        // Now, set the parameters :
        var reunionObjet = new ReunionObjet();
        reunionObjet.personnes = reunion.personnes.toString();
        reunionObjet.objet = reunion.objet.toString().trim();
        reunionObjet.emplacement = reunion.emplacement.toString().trim();
        reunionObjet.dates = dates;
        reunionObjet.heuredebut = reunion.heuredebut.toString();
        reunionObjet.heurefin = reunion.heurefin.toString();
        reunionObjet.duree = reunion.duree;
        reunionObjet.rappel = reunion.rappel;
        reunionObjet.resume = reunion.resume.toString().trim();
        // User ID :
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/enregistrereunion"), reunionObjet, {});
    }


    // Send the report :
    modifierReunion(reunion: Reunion, dates: string): Observable<Reponse> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('personnes', reunion.personnes.toString());
        mesParams = mesParams.append('objet', reunion.objet.toString());
        mesParams = mesParams.append('emplacement', reunion.emplacement.toString());
        mesParams = mesParams.append('dates', dates);
        mesParams = mesParams.append('heuredeb', reunion.heuredebut.toString());
        mesParams = mesParams.append('heurefin', reunion.heurefin.toString());
        mesParams = mesParams.append('duree', reunion.duree.toString());
        mesParams = mesParams.append('rappel', reunion.rappel.toString());
        mesParams = mesParams.append('resume', reunion.resume.toString().trim());
        mesParams = mesParams.append('idreu', reunion.idreu.toString());
        // User ID :
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant"));
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/modifiereunion"),
            {
                params: mesParams
            });
    }


    // Liste des MOIS
    getListeMois(): Observable<Mois[]> {
        return this.httpclient.get<Mois[]>(this.webserviceUri.concat("/getListeMois"),
            {});
    }


    // Liste des ANNEES
    getListeAnnees(): Observable<Annee[]> {
        return this.httpclient.get<Annee[]>(this.webserviceUri.concat("/getListeAnnee"),
            {});
    }


    // Save Activite:
    enregistrerPerf(performance: Performance): Observable<Reponse> {
        //
        var performanceObjet = new PerformanceObjet();
        performanceObjet.collabo = performance.identifiant.toString().trim();
        performanceObjet.choix = performance.choix;
        performanceObjet.annee = performance.annee;
        performanceObjet.mois = performance.mois;
        performanceObjet.valeur = performance.valeur;
        performanceObjet.idper = 0;
        // User ID :
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/enregistrerPerf"), performanceObjet,
            {});
    }


    // Save Activite:
    modifierPerf(performance: Performance, idperf: number): Observable<Reponse> {
        var performanceObjet = new PerformanceObjet();
        performanceObjet.collabo = performance.identifiant.toString().trim();
        performanceObjet.choix = performance.choix;
        performanceObjet.annee = performance.annee;
        performanceObjet.mois = performance.mois;
        performanceObjet.valeur = performance.valeur;
        performanceObjet.idper = idperf;
        /* */
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/modifierPerf"), performanceObjet, {});
    }


    //
    getperformanceteam(): Observable<PerfRestModif[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<PerfRestModif[]>(this.webserviceUri.concat("/getperformanceteam"),
            {
                //params : mesParams
            });
    }


    //
    getReunionTeambySupId(): Observable<ReunionRestSup[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<ReunionRestSup[]>(this.webserviceUri.concat("/getReunionTeambySupId"),
            {
                //params : mesParams
            });
    }


    //
    getReunionTeambyProfilId(profil: string): Observable<ReunionRestSup[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('profil', profil); // 
        return this.httpclient.get<ReunionRestSup[]>(this.webserviceUri.concat("/getReunionTeambyProfilId"),
            {
                params: mesParams
            });
    }


    //
    getAllManagersReunion(profil: string): Observable<ReunionRestSup[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('profil', profil); // 
        return this.httpclient.get<ReunionRestSup[]>(this.webserviceUri.concat("/getAllManagersReunion"),
            {
                params: mesParams
            });
    }


    //
    getMyperformance(): Observable<PerfRest[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('identifiant', localStorage.getItem("identifiant")); // 
        return this.httpclient.get<PerfRest[]>(this.webserviceUri.concat("/getMyperformance"),
            {
                //params : mesParams
            });
    }


    //
    getperformancemanagers(profil: string): Observable<PerfRestModif[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('profil', profil); // 
        return this.httpclient.get<PerfRestModif[]>(this.webserviceUri.concat("/getperformancemanagers"),
            {
                params: mesParams
            });
    }



    // Liste of DIRCETEUR AD
    getUtilisateurByProfil(profil: string): Observable<Utilisateur[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('profil', profil); //
        return this.httpclient.get<Utilisateur[]>(this.webserviceUri.concat("/getUtilisateurByProfil"),
            {
                params: mesParams
            });
    }


    // Histo DATA :
    gethistotoday(): Observable<HistoRest[]> {
        return this.httpclient.get<HistoRest[]>(this.webserviceUri.concat("/findAllTodayHistorique"),
            {
            });
    }


    // Histo Mois DATA :
    gethistomois(): Observable<HistoRest[]> {
        return this.httpclient.get<HistoRest[]>(this.webserviceUri.concat("/findAllMoisHistorique"),
            {
            });
    }

    // Histo Mois DATA :
    getMacAddresses(): Observable<MacRest[]> {
        return this.httpclient.get<MacRest[]>(this.webserviceUri.concat("/findMacaddresses"),
            {
            });
    }


    // Get Commercial RDV data from RESPONSABLE profil :
    getFullComRdvManager(): Observable<RdvComRest[]> {
        return this.httpclient.get<RdvComRest[]>(this.webserviceUri.concat("/getFullComRdvManager"),
            {
            });
    }

    // Get Superviseur RDV data from RESPONSABLE profil :
    getFullSupRdvManager(): Observable<RdvComRest[]> {
        return this.httpclient.get<RdvComRest[]>(this.webserviceUri.concat("/getFullSupRdvManager"),
            {
            });
    }


    // Get Inspecteur RDV data from RESPONSABLE profil :
    getFullInsRdvManager(): Observable<RdvComRest[]> {
        return this.httpclient.get<RdvComRest[]>(this.webserviceUri.concat("/getFullInsRdvManager"),
            {
            });
    }


    // Get Commercial RDV data from INSPECTEUR profil :
    getFullComRdvInspecteur(): Observable<RdvComRest[]> {
        return this.httpclient.get<RdvComRest[]>(this.webserviceUri.concat("/getFullComRdvInspecteur"),
            {
            });
    }


    // Get Commercial RDV data from INSPECTEUR profil :
    getFullSupRdvInspecteur(): Observable<RdvComRest[]> {
        return this.httpclient.get<RdvComRest[]>(this.webserviceUri.concat("/getFullSupRdvInspecteur"),
            {
            });
    }

    // Get RDV created for actual MONTH :
    getMonthRdvCreated(): Observable<RdvInfoRest[]> {
        return this.httpclient.get<RdvInfoRest[]>(this.webserviceUri.concat("/getMonthRdvCreated"),
            {
            });
    }


    //
    findTeamMembreById(): Observable<UtilisateurInfo[]> {
        // 
        return this.httpclient.get<UtilisateurInfo[]>(this.webserviceUri.concat("/findTeamMembreById"),
            {
                //params : mesParams
            });
    }


    // Get Invitation REQUEST :
    getRdvInvitationRequest(): Observable<InvitationRequest[]> {
        // 
        return this.httpclient.get<InvitationRequest[]>(this.webserviceUri.concat("/getRdvInvitationRequest"),
            {
                //params : mesParams
            });
    }


    // Get Invitation REQUEST :
    getinvitationrdvforcom(): Observable<InvitationRequest[]> {
        // 
        return this.httpclient.get<InvitationRequest[]>(this.webserviceUri.concat("/getinvitationrdvforcom"), {});
    }



    // Get Invitation REQUEST :
    getRdvInvitationHisto(): Observable<InvitationRequest[]> {
        // 
        return this.httpclient.get<InvitationRequest[]>(this.webserviceUri.concat("/getRdvInvitationHistorique"),
            {
                //params : mesParams
            });
    }


    // Give answer :
    respondToInvitation(donnee: InvitationRequest): Observable<Reponse> {
        /* */
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/respondToInvitation"), donnee, {});
    }


    // Give answer :
    getNsiaWholeTeam(): Observable<NsiaTeam[]> {
        /* */
        return this.httpclient.get<NsiaTeam[]>(this.webserviceUri.concat("/getPersonnelNsia"), {});
    }




    // Send the ACTIVITE COMMERCIALE :
    enregistreractivite(donnee: ActivitecommercialeRest): Observable<Reponse> {
        // process :
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/enregistreractivitecom"), donnee, {});
    }

    // Obtenir un REUNION :
    getSpecificActivite(id: string): Observable<ActivitecommercialeRest> {

        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('id', id); // 
        return this.httpclient.get<ActivitecommercialeRest>(this.webserviceUri.concat("/getbackactivite"),
            {
                params: mesParams
            });
    }


    // Liste des utilisateurs appartenant à la meme equipe :
    getwebmembrequipe(): Observable<UtilisateurInfo[]> {
        // 
        return this.httpclient.get<UtilisateurInfo[]>(this.webserviceUri.concat("/getwebmembrequipe"), {});
    }

    // Liste des Clients :
    getclientforoperations(): Observable<UtilisateurInfo[]> {
        // 
        return this.httpclient.get<UtilisateurInfo[]>(this.webserviceUri.concat("/getclientforoperations"), {});
    }


    // Liste des Clients du commercial :
    getapilesclientsbyid(): Observable<RestClientFull[]> {
        // 
        return this.httpclient.get<RestClientFull[]>(this.webserviceUri.concat("/getapilesclientsbyid"), {});
    }



    // Liste des POLICES souscrites :
    getlespolicesbyclient(idclient: String): Observable<RestPolice[]> {
        //  ApiNsiaController
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idclient', idclient.toString());
        return this.httpclient.get<RestPolice[]>(this.webserviceUri.concat("/getlespolicesbyclient"),
            {
                params: mesParams
            });
    }


    //
    getNewlespolicesbyclient(idclient: String, idcli: String, produit: number): Observable<RestPolice[]> {
        //  ApiNsiaController
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idclient', idclient.toString());
        mesParams = mesParams.append('idcli', idcli.toString());
        mesParams = mesParams.append('produit', produit.toString());
        return this.httpclient.get<RestPolice[]>(this.webserviceUri.concat("/getnewlespolicesbyclient"),
            {
                params: mesParams
            });
    }



    // Liste des Clients :
    getclientpersonaldata(idcli: string): Observable<ClientRest> {
        // 
        var queteObjet = new Quete();
        queteObjet.code = idcli;
        // 
        return this.httpclient.post<ClientRest>(this.webserviceUri.concat("/getclientpersonaldata"), queteObjet, {});
    }


    // Liste  :
    getdonneeparametree(id: string): Observable<Detailtable[]> {
        // 
        var queteObjet = new Quete();
        queteObjet.code = id;
        // 
        return this.httpclient.post<Detailtable[]>(this.webserviceUri.concat("/getdonneeparametree"), queteObjet, {});
    }


    // Get MOTIF PAIEMENT  :
    getMotifsPaiement(): Observable<Motifpaiement[]> {
        // TRAITEMENT Controller :
        return this.httpclient.get<Motifpaiement[]>(this.webserviceUri.concat("/getMotifsPaiement"), {});
    }


    // Get ZONE DESTINATION  :
    getzonedestination(): Observable<Zonedestination[]> {
        // TRAITEMENT Controller :
        return this.httpclient.get<Zonedestination[]>(this.webserviceUri.concat("/getzonedestination"), {});
    }


    // PAYS DESTINATION  :
    getpaysdestination(idzon: string): Observable<Paysdestination[]> {
        // TRAITEMENT Controller : 
        var queteObjet = new Quete();
        queteObjet.code = idzon;
        // 
        return this.httpclient.post<Paysdestination[]>(this.webserviceUri.concat("/getpaysdestination"), queteObjet, {});
    }


    // Get INDEMNITE MAX (Devis AUTO)  :
    getlesindemnitesauto(): Observable<Indemnitemax[]> {
        // 
        return this.httpclient.get<Indemnitemax[]>(this.webserviceUri.concat("/getlesindemnitesauto"), {});
    }


    // Get MARQUES (Devis AUTO)  :
    getlesmarquesauto(): Observable<Marque[]> {
        // 
        return this.httpclient.get<Marque[]>(this.webserviceUri.concat("/getlesmarques"), {});
    }


    // Get GARANTIE based on FORMULE 'id' :
    getgarantieformule(id: string): Observable<Detailtable[]> {
        // 
        var queteObjet = new Quete();
        queteObjet.code = id;
        // 
        return this.httpclient.post<Detailtable[]>(this.webserviceUri.concat("/getgarantieformule"), queteObjet, {});
    }


    // Get Parametres WEB :
    getparametresweb(): Observable<Parametrage> {
        // 
        return this.httpclient.get<Parametrage>(this.webserviceUri.concat("/getparametersweb"), {});
    }

    // Get Parametres WEB :
    lookforsystemparameter(): Observable<Reponse> {
        // 
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/lookforsystemparameter"), {});
    }

    // Gerer les parametres WEB :
    managewebparameters(prix: string, tr1: string, tr2: string, tr3: string, tr4: string): Observable<Reponse> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('prix', prix); // 
        mesParams = mesParams.append('tr1', tr1); // 
        mesParams = mesParams.append('tr2', tr2); // 
        mesParams = mesParams.append('tr3', tr3); // 
        mesParams = mesParams.append('tr4', tr4); // 
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/managewebparameters"),
            {
                params: mesParams
            });
    }


    // Get statistics for PROFILEs : 
    getRdvStatsforUserBasedonProfil(profil: number): Observable<StatGen[]> {
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('profil', profil.toString()); // 
        return this.httpclient.get<StatGen[]>(this.webserviceUri.concat("/getRdvStatsforUserBasedonProfil"),
            {
                params: mesParams
            });

    }


    // Liste  des CIVILITE:
    getallcivilite(): Observable<Civilite[]> {
        // 
        return this.httpclient.get<Civilite[]>(this.webserviceUri.concat("/getallcivilite"), {});
    }



    // SEND DATA for DEVIS AUTO :
    sendDevisAuto(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendDevisAuto"), donnees, {});
    }


    // SEND DATA for DEVIS SANTE :
    sendDevisSante(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendDevisSante"), donnees, {});
    }


    // SEND DATA for DEVIS SANTE :
    sendDevisSanteConjoint(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendDevisSanteConjoint"), donnees, {});
    }


    //  :
    sendDevisSanteAdulte(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendDevisSanteAdulte"), donnees, {});
    }


    // SEND DATA for DEVIS SANTE :
    sendDevisSanteEnfantFam(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendDevisSanteEnfantFam"), donnees, {});
    }


    // SEND INFO for DEVISSANTE Table :
    sendInfoSante(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendInfoSante"), donnees, {});
    }


    // SEND DATA for DEVIS ACCIDENT :
    sendDevisAccident(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendDevisAccident"), donnees, {});
    }

    // SEND DATA for DEVIS VOYAGE :
    sendDevisVoyage(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendDevisVoyage"), donnees, {});
    }

    // SEND DATA for DEVIS MRH :
    sendDevisMrh(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendDevisMrh"), donnees, {});
    }


    // SEND DATA for PAYMENT CHEQUE :
    sendPaiementCheque(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendPaiementCheque"), donnees, {});
    }


    // 
    sendPaiementVirement(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendPaiementVirement"), donnees, {});
    }


    // Send REPORT request :
    sendReportRequest(donnees: FormData): Observable<any> {
        // 
        return this.httpclient.post(this.webserviceUri.concat("/sendReportRequest"), donnees, { responseType: 'blob' });
    }





    // Pull back data for DEVIS AUTO  :
    getDevisAutoByTrader(): Observable<BeanDonneDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanDonneDevis[]>(this.webserviceUri.concat("/getDevisAutoByTrader"), {});
    }


    // Pull back data for DEVIS SANTE  :
    getDevisSanteByTrader(): Observable<BeanDonneDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanDonneDevis[]>(this.webserviceUri.concat("/getDevisSanteByTrader"), {});
    }


    // Pull back data for DEVIS ACCIDENT  :
    getDevisAccidentByTrader(): Observable<BeanDonneDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanDonneDevis[]>(this.webserviceUri.concat("/getDevisAccidentByTrader"), {});
    }

    // Pull back data for DEVIS VOYAGE  :
    getDevisVoyageByTrader(): Observable<BeanDonneDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanDonneDevis[]>(this.webserviceUri.concat("/getDevisVoyageByTrader"), {});
    }

    // Pull back data for DEVIS MRH  :
    getDevisMrhByTrader(): Observable<BeanDonneDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanDonneDevis[]>(this.webserviceUri.concat("/getDevisMrhByTrader"), {});
    }


    // Pull back data for DEVIS AUTO  :
    getDevisAutoByIdauto(idauto: string): Observable<Clientbeanauto> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idauto', idauto); // 
        return this.httpclient.get<Clientbeanauto>(this.webserviceUri.concat("/getDevisAutoByIdauto"),
            {
                params: mesParams
            });
    }


    // Pull back data for DEVIS ACCIDENT  :
    getDevisAccidentByIdacc(idacc: string): Observable<Clientbeanaccident> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idacc', idacc); // 
        return this.httpclient.get<Clientbeanaccident>(this.webserviceUri.concat("/getDevisAccidentByIdacc"),
            {
                params: mesParams
            });
    }


    // Pull back data for DEVIS MRH  :
    getDevisMrhByIdacc(idmrh: string): Observable<Clientbeanmrh> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idmrh', idmrh); // 
        return this.httpclient.get<Clientbeanmrh>(this.webserviceUri.concat("/getDevisMrhByIdacc"),
            {
                params: mesParams
            });
    }


    // Pull back data for DEVIS SANTE  :
    getDevisSanteByIdsan(idsan: string): Observable<Clientbeansante> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idsan', idsan); // 
        return this.httpclient.get<Clientbeansante>(this.webserviceUri.concat("/getDevisSanteByIdsan"),
            {
                params: mesParams
            });
    }


    // Pull back data for DEVIS SANTE NEW  :
    getDevisSanteByIdsanNew(idsan: string): Observable<Clientbeansanteadherent> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idsan', idsan); // 
        return this.httpclient.get<Clientbeansanteadherent>(this.webserviceUri.concat("/getDevisSanteByIdsan"),
            {
                params: mesParams
            });
    }


    // Pull back data for DEVIS SANTE NEW  :
    getconjointsantedata(idsan: string): Observable<Clientbeansantefamille> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idsan', idsan); // 
        return this.httpclient.get<Clientbeansantefamille>(this.webserviceUri.concat("/getconjointsantedata"),
            {
                params: mesParams
            });
    }


    getenfantsantedata(idenf: string, idsan: string): Observable<Clientbeansantefamille> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idenf', idenf); // 
        mesParams = mesParams.append('idsan', idsan); // 
        return this.httpclient.get<Clientbeansantefamille>(this.webserviceUri.concat("/getenfantsantedata"),
            {
                params: mesParams
            });
    }


    getadultesantedata(idadu: string, idsan: string): Observable<Clientbeansanteadulte> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idadu', idadu); // 
        mesParams = mesParams.append('idsan', idsan); // 
        return this.httpclient.get<Clientbeansanteadulte>(this.webserviceUri.concat("/getadultesantedata"),
            {
                params: mesParams
            });
    }



    // Pull back data from DEVISSANTE  :
    getInfoSanteByIdsan(idsan: string): Observable<Clientbeaninfosante> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idsan', idsan); // 
        return this.httpclient.get<Clientbeaninfosante>(this.webserviceUri.concat("/getInfosSanteByIdsan"),
            {
                params: mesParams
            });
    }


    // Pull back data for DEVIS VOYAGE  :
    getDevisVoyageByIdvoy(idvoy: string): Observable<Clientbeanvoyage> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idvoy', idvoy); // 
        return this.httpclient.get<Clientbeanvoyage>(this.webserviceUri.concat("/getDevisVoyageByIdvoy"),
            {
                params: mesParams
            });
    }


    // Pull back data DEVIS stats  :
    getStatsDevisForUser(): Observable<StatsDevisUser> {
        // -> DevisController
        return this.httpclient.get<StatsDevisUser>(this.webserviceUri.concat("/getStatsDevisForUser"), {});
    }


    // Pull back data DEVIS stats  :
    getStatsDevisByTresorier(): Observable<StatsDevisUser> {
        // -> DevisController
        return this.httpclient.get<StatsDevisUser>(this.webserviceUri.concat("/getStatsDevisByTresorier"), {});
    }


    // Pull back data DEVIS stats for TEAM  :
    getStatsDevisEnCoursForManager(): Observable<StatsDevisUser> {
        // -> DevisController
        return this.httpclient.get<StatsDevisUser>(this.webserviceUri.concat("/getStatsDevisEnCoursForManager"), {});
    }

    // Pull back data FULL DEVIS stats for TEAM  :
    getStatsFullDevisForManager(): Observable<StatsDevisUser> {
        // -> DevisController
        return this.httpclient.get<StatsDevisUser>(this.webserviceUri.concat("/getStatsFullDevisForManager"), {});
    }


    // Pull back data for CHEQUE  :
    getChequeData(iddevis: string): Observable<Clientbeancheque> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('iddevis', iddevis); // 
        return this.httpclient.get<Clientbeancheque>(this.webserviceUri.concat("/getChequeData"),
            {
                params: mesParams
            });
    }

    // Pull back data for CHEQUE  :
    getVirementData(iddevis: string): Observable<Clientbeancheque> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('iddevis', iddevis); // 
        return this.httpclient.get<Clientbeancheque>(this.webserviceUri.concat("/getVirementData"),
            {
                params: mesParams
            });
    }


    // SEND DATA for FORET :
    sendforet(donnees: FormData): Observable<Quete> {
        // 
        return this.httpclient.post<Quete>(this.webserviceUri.concat("/sendforet"), donnees, {});
    }


    // Pull back data for DEVIS AUTO  :
    deplacement(coordonnee: string, mouvement: string): Observable<Quete> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('coordonnee', coordonnee); // 
        mesParams = mesParams.append('mouvement', mouvement); // 
        return this.httpclient.get<Quete>(this.webserviceUri.concat("/deplacement"),
            {
                params: mesParams
            });
    }


    // Get DEVIS AUTO for COMMERCIAL related to SUPERVISEUR   :
    getCommercialHistoDevisAuto(): Observable<ClientBeanComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanComAuto[]>(this.webserviceUri.concat("/getCommercialHistoDevisAuto"), {});
    }


    // Get DEVIS SANTE for COMMERCIAL related to SUPERVISEUR   :
    getCommercialHistoDevisSante(): Observable<ClientBeanComSante[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanComSante[]>(this.webserviceUri.concat("/getCommercialHistoDevisSante"), {});
    }


    // Get DEVIS SANTE to be reviewed by TRESORIER   :
    getTresorierDevisSante(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getTresorierDevisSante"), {});
    }


    // Get DEVIS AUTO to be reviewed by TRESORIER   :
    getTresorierDevisAuto(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getTresorierDevisAuto"), {});
    }

    // Get DEVIS AUTO to be reviewed by TRESORIER   :
    getTresorierDevisVoyage(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getTresorierDevisVoyage"), {});
    }

    // Get DEVIS STATS AUTO for COMMERCIAL related to SUPERVISEUR   :
    getCommercialStatsHistoDevisAuto(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getCommercialStatsHistoDevisAuto"), {});
    }


    // Get DEVIS STATS SANTE for COMMERCIAL related to SUPERVISEUR   :
    getCommercialStatsHistoDevisSante(): Observable<ClientBeanStatComSante[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComSante[]>(this.webserviceUri.concat("/getCommercialStatsHistoDevisSante"), {});
    }


    // Get DEVIS STATS VOYAGE for COMMERCIAL related to MANAGER   :
    getCommercialHistoStatDevisVoyage(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getCommercialHistoStatDevisVoyage"), {});
    }


    // Get DEVIS STATS ACCIDENT for COMMERCIAL related to MANAGER   :
    getCommercialHistoStatDevisAccident(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getCommercialHistoStatDevisAccident"), {});
    }


    // Get DEVIS ACCIDENT to be reviewed by TRESORIER   :
    getTresorierDevisAccident(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getTresorierDevisAccident"), {});
    }

    // Get DEVIS MRH to be reviewed by TRESORIER   :
    getTresorierDevisMrh(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getTresorierDevisMrh"), {});
    }

    // Get DEVIS STATS MRH for COMMERCIAL related to MANAGER   :
    getCommercialHistoStatDevisMrh(): Observable<ClientBeanStatComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanStatComAuto[]>(this.webserviceUri.concat("/getCommercialHistoStatDevisMrh"), {});
    }


    // Get DEVIS ACCIDENT for COMMERCIAL related to SUPERVISEUR   :
    getCommercialHistoDevisAccident(): Observable<ClientBeanComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanComAuto[]>(this.webserviceUri.concat("/getCommercialHistoDevisAccident"), {});
    }


    // Get DEVIS VOYAGE for COMMERCIAL related to SUPERVISEUR   :
    getCommercialHistoDevisVoyage(): Observable<ClientBeanComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanComAuto[]>(this.webserviceUri.concat("/getCommercialHistoDevisVoyage"), {});
    }


    // Get DEVIS MRH for COMMERCIAL related to SUPERVISEUR   :
    getCommercialHistoDevisMrh(): Observable<ClientBeanComAuto[]> {
        // DevisController :
        return this.httpclient.get<ClientBeanComAuto[]>(this.webserviceUri.concat("/getCommercialHistoDevisMrh"), {});
    }


    // CLOSE a DEVIS  :
    closeDevis(iddevis: string): Observable<Quete> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('iddevis', iddevis); // 
        return this.httpclient.get<Quete>(this.webserviceUri.concat("/closeDevis"),
            {
                params: mesParams
            });
    }



    // VALID a PAYMENT  :
    validPayment(iddevis: string): Observable<Quete> {
        // -> DevisController
        // Now, set the parameters :
        let mesParams = new HttpParams();
        mesParams = mesParams.append('iddevis', iddevis); // 
        return this.httpclient.get<Quete>(this.webserviceUri.concat("/validPayment"),
            {
                params: mesParams
            });
    }


    // Get PIE CHART for particular user
    getStatsRdvRapportDevisForUser(contact: string): Observable<BeanPortfolioDevis[]> {
        // 
        var queteObjet = new Quete();
        queteObjet.code = contact;
        // 
        return this.httpclient.post<BeanPortfolioDevis[]>(this.webserviceUri.concat("/getStatsRdvRapportDevisForUser"),
            queteObjet, {});
    }


    // Profil:
    getprofilclient(idcli: string): Observable<Clientprofil> {
        // 
        var queteObjet = new Quete();
        queteObjet.code = idcli;
        return this.httpclient.post<Clientprofil>(this.webserviceUri.concat("/getprofilclient"), queteObjet, {});
    }

    // RDV du client:
    getprofilclientrdv(idcli: string): Observable<BeanClientRdvStat> {
        // 
        var queteObjet = new Quete();
        queteObjet.code = idcli;
        return this.httpclient.post<BeanClientRdvStat>(this.webserviceUri.concat("/getprofilclientrdv"), queteObjet, {});
    }



    // Get CHART based on User's RDV :
    getChartRdvforUniqueUser(contact: string): Observable<DataGrapheCours[]> {
        // ApiCallController
        var queteObjet = new Quete();
        queteObjet.code = contact;
        // 
        return this.httpclient.post<DataGrapheCours[]>(this.webserviceUri.concat("/getChartRdvforUniqueUser"),
            queteObjet, {});
    }

    // Get CHART based on User's RDV & PERFORMANCE :
    getObjectifMonthlyforUser(contact: string): Observable<DataGrapheCours[]> {
        // ApiCallController
        var queteObjet = new Quete();
        queteObjet.code = contact;
        // 
        return this.httpclient.post<DataGrapheCours[]>(this.webserviceUri.concat("/getObjectifMonthlyforUser"),
            queteObjet, {});
    }

    // Get CHART based on User's RAPPORT :
    getChartRapportforUniqueUser(contact: string): Observable<DataGrapheCours[]> {
        // ApiCallController
        var queteObjet = new Quete();
        queteObjet.code = contact;
        // 
        return this.httpclient.post<DataGrapheCours[]>(this.webserviceUri.concat("/getChartRapportforUniqueUser"),
            queteObjet, {});
    }


    // Get CHART based on User's DEVIS :
    getChartDevisforUniqueUser(contact: string): Observable<DataGrapheCours[]> {
        // ApiCallController
        var queteObjet = new Quete();
        queteObjet.code = contact;
        // 
        return this.httpclient.post<DataGrapheCours[]>(this.webserviceUri.concat("/getChartDevisforUniqueUser"),
            queteObjet, {});
    }


    // Commerciaux LISTE liste
    getcollaborateurs(): Observable<Utilisateur[]> {
        return this.httpclient.get<Utilisateur[]>(this.webserviceUri.concat("/getcollaborateurs"),
            {});
    }



    // Get CHART based on User's DEVIS :
    getResumeFamille(idsan: string): Observable<Detailresumefamille[]> {
        // ApiCallController
        var queteObjet = new Quete();
        queteObjet.code = idsan;
        // 
        return this.httpclient.post<Detailresumefamille[]>(this.webserviceUri.concat("/getResumeFamille"),
            queteObjet, {});
    }

    // Get  :
    getConjointHistorique(idsan: string): Observable<Detailconjoint[]> {
        // ApiCallController
        var queteObjet = new Quete();
        queteObjet.code = idsan;
        // 
        return this.httpclient.post<Detailconjoint[]>(this.webserviceUri.concat("/getConjointHistorique"),
            queteObjet, {});
    }

    // Get  :
    getEnfantHistorique(idsan: string): Observable<Detailenfant[]> {
        // ApiCallController
        var queteObjet = new Quete();
        queteObjet.code = idsan;
        // 
        return this.httpclient.post<Detailenfant[]>(this.webserviceUri.concat("/getEnfantHistorique"),
            queteObjet, {});
    }


    // Get  :
    getAdulteHistorique(idsan: string): Observable<Detailenfant[]> {
        // ApiCallController
        var queteObjet = new Quete();
        queteObjet.code = idsan;
        // 
        return this.httpclient.post<Detailenfant[]>(this.webserviceUri.concat("/getAdulteHistorique"),
            queteObjet, {});
    }

    //   :
    getHistoDevisForInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisForInspecteur"), {});
    }

    // DEVIS AUTO - COMM  -  RESPONSABLE RESEAU :
    getHistoDevisAutoCommForManager(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisAutoCommForManager"), {});
    }

    // DEVIS AUTO - SUP  -  RESPONSABLE RESEAU :
    getHistoDevisAutoSupForManager(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisAutoSupForManager"), {});
    }

    // DEVIS AUTO - INS  -  RESPONSABLE RESEAU :
    getHistoDevisAutoInsForManager(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisAutoInsForManager"), {});
    }

    //   :
    getHistoDevisSupForInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisSupForInspecteur"), {});
    }

    //   :
    getHistoDevisCommVoyageInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisCommVoyageInspecteur"), {});
    }

    //   :
    getHistoDevisSupVoyageInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisSupVoyageInspecteur"), {});
    }

    //   :
    getHistoDevisCommAccidentInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisCommAccidentInspecteur"), {});
    }

    //   :
    getHistoDevisSupAccidentInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisSupAccidentInspecteur"), {});
    }

    //   :
    getHistoDevisComMrhInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisComMrhInspecteur"), {});
    }

    //   :
    getHistoDevisSupMrhInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisSupMrhInspecteur"), {});
    }

    //   :
    getHistoDevisComSanteInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisComSanteInspecteur"), {});
    }

    //   :
    getHistoDevisSupSanteInspecteur(): Observable<BeanStatsDevis[]> {
        // -> DevisController
        return this.httpclient.get<BeanStatsDevis[]>(this.webserviceUri.concat("/getHistoDevisSupSanteInspecteur"), {});
    }

    //   :
    findAllDetailTables(): Observable<Beandetailnom[]> {
        // -> DevisController
        return this.httpclient.get<Beandetailnom[]>(this.webserviceUri.concat("/findAllDetailTables"), {});
    }


    // Save the new user :
    requestfortaxedata(taxe: number): Observable<Beandetailnom[]> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idnom', taxe.toString());
        return this.httpclient.get<Beandetailnom[]>(this.webserviceUri.concat("/requestfortaxedata"),
            {
                params: mesParams
            });
    }

    // Save the new user :
    getBienDataBack(idmag: string): Observable<Magasin> {
        let mesParams = new HttpParams();
        mesParams = mesParams.append('idmag', idmag);
        return this.httpclient.get<Magasin>(this.webserviceUri.concat("/getBienDataBack"),
            {
                params: mesParams
            });
    }

    // Get ONGOING COMMANDE
    getongoingcommande(fdt: FormData): Observable<BeanOngoingCommande[]> {
        return this.httpclient.post<BeanOngoingCommande[]>(this.webserviceUri.concat("/getongoingcommande"), fdt, {});
    }

    // Get GROSSISTE DATA
    getgrossistepaiement(): Observable<BeanPaiementGrossiste[]> {
        return this.httpclient.get<BeanPaiementGrossiste[]>(this.webserviceUri.concat("/getgrossistepaiement"), {});
    }

    // Get All ARTICLEs from one COMMANDE :
    getongoingarticlesfromcommande(donnees: FormData): Observable<BeanArticleCommande[]> {
        return this.httpclient.post<BeanArticleCommande[]>(this.webserviceUri.concat("/getongoingarticlesfromcommande"), donnees, {});
    }

    // Get All ARTICLEs from one COMMANDE :
    getvalidatedarticlesfromcommande(donnees: FormData): Observable<BeanArticleCommande[]> {
        return this.httpclient.post<BeanArticleCommande[]>(this.webserviceUri.concat("/getvalidatedarticlesfromcommande"), donnees, {});
    }

    // Signaler l'EMISSION DU COLIS :
    emissioncolis(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/emissioncolis"), donnees, {});
    }

    // Confirmer la livraison de la COMMMANDE :
    livraisonCommande(donnees: FormData): Observable<Reponse> {
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/livraisonCommande"), donnees, {});
    }

    // Send ARTICLE BOOKED :
    validatecommande(objet: Beanapprobation[]): Observable<Reponse> {
        // 
        return this.httpclient.post<Reponse>(this.webserviceUri.concat("/validatecommande"), objet, {});
    }

    // Save the new user :
    saveadminparams(mail: string): Observable<Reponse> {

        let mesParams = new HttpParams();
        mesParams = mesParams.append('mail', mail);
        return this.httpclient.get<Reponse>(this.webserviceUri.concat("/saveadminparams"),
            {
                params: mesParams
            });
    }

}