import { Fournisseur } from './fournisseur';

export class Stock {
  idstock: number;
  fournisseursName: string;
  idfourn: number;
  fournisseur: Fournisseur;
  productsName: string;
  qte: number;
  qteMin: string;
  libelleStock: string;
}
