import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(users: User[], searchValue:string): User[] {
    if (!users || !searchValue){
      return users;
    }
    return users.filter(user=> user.categorieClient.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
