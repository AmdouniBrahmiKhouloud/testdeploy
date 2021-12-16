import { Role } from './Role';

export class User{
  idClient?: number;
  nom?: string;
  prenom?: string;
  dateNaissance?: Date;
  email?: string;
  password?: string;
  categorieClient?: string;
  profession?: string;
  active?:boolean;
  roles?:Role[];

}
