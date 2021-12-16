import {User} from './user';

export class Facture {
  id: number ;
  montantRemise: number ;
  montantFacture: number ;
  dateFacture: Date ;
  active: boolean ;
  user: User ;
}


