export class User {

  constructor(
    public name:string,
    public email:string,
    public position:string,
    public password?:string,
    public photoURL?:string,
    public rols?:string,
    public uid?:string,
    ) {}
  }