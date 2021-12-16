import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Reclamation } from '../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  constructor(private http: HttpClient) {}

  url = environment.url + 'reclamation/';
  getListreclamation() {
    return this.http.get<Reclamation[]>(this.url + 'retrieve-all-reclamation');
  }

  getListreclamationRespondedPerClient(idclient) {
    return this.http.get<Reclamation[]>(this.url + 'retrieve-all-reclamationRespondedPerClient/' + idclient);
  }

  addreclamation(reclamation: Reclamation) {
    return this.http.post(this.url + 'add-reclamation', reclamation);
  }

  deletereclamation(id: string) {
    return this.http.delete(this.url + 'remove-reclamation/' + id);
  }
  updatereclamation(fournisseur: Reclamation) {
    return this.http.put(this.url + 'updatereclamation/' + fournisseur.idReclamation, fournisseur);
  }
}
