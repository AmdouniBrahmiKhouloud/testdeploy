import { DetailProduct } from './DetailProduct';
import { Stock } from './stock';

export class Product {
  idproduit?: number;
  image?: any;
  code?: string;
  libelle?: string;
  prixUnitaire?: number;
  // rayon ?:any;
  idFournisseur?: number;
  stockName?: String;
  categoryName?: String;
  description?: String;
}
