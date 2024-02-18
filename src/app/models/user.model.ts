import { environment } from '../../environments/environment';

const base_url = environment.base_url; 

export class User {

  constructor(
    public nombre:string,
    public email:string,
    public password:string,
    public chefGuest:boolean,
    public img?:string,
    public role?:string,
    public uid?:string,
    ) {}

    get getImgUrl() {

      if ( this.img ) {
        return `${ base_url}/usuarios/${this.img}`;

      } else {
        return `${ base_url}/usuarios/no-image`;
      }

      return '';

    } 

}
