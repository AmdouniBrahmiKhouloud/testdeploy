import { Product } from './product';

export class Promotion{
  id: number;
  name: string;
  pourcentage: number;
  description: string;
  dateBegin: Date;
  endate: Date;
  produit: Product ;
  }
