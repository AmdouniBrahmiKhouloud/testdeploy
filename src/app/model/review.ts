import { User } from './user';
import { Product } from './product';

export class Review {
  id?: number;
  rating: number;
  description: string;
  client: User;
  product: Product;
}
