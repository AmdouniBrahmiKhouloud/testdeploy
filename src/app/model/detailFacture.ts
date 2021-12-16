import {Product} from './product';
import {Facture} from './facture';

export class DetailFacture {
  idDetailFacture: number ;
  qte: number ;
  prixTotal: number ;
  pourcentageRemise: number ;
  montantRemise: number ;
  product: Product ;
  facture: Facture ;
}
