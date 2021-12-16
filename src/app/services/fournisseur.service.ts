import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Fournisseur } from '../model/fournisseur';
import { MailFournisseur } from '../model/mailFournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  constructor(private http: HttpClient) {}

  url = environment.url + 'fournisseur/';
  getListfournisseur() {
    return this.http.get<Fournisseur[]>(this.url + 'retrieve-all-fournisseur');
  }

  addfournisseur(fournisseur: Fournisseur) {
    return this.http.post(this.url + 'add-fournisseur', fournisseur);
  }
  getfournisseurById(id: string) {
    return this.http.get<Fournisseur>(this.url + 'retrieve-fournisseur/' + id);
  }

  deletefournisseur(id: string) {
    return this.http.delete(this.url + 'remove-fournisseur/' + id);
  }
  updatefournisseur(fournisseur: Fournisseur) {
    console.log(fournisseur);
    return this.http.put(this.url + 'updateFournisseur/' + fournisseur.idFournisseur, fournisseur);
  }

  listeProdPerFournisseur(id) {
    return this.http.get<Fournisseur[]>(this.url + 'retrieve-productsParFournisseur/' + id);
  }

  statsfournisseur() {
    return this.http.get(this.url + 'stats/');
  }

  Sendmail(mailFournisseur: MailFournisseur) {
    return this.http.post(this.url + 'sendMailfournisseur', mailFournisseur);
  }
  
}
