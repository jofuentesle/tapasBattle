interface _EventsUser {
  _id: string,
  nombre: string;
  img: string;
}
export class Event {

    constructor(
      public nombre:string,
      public fecha:Date,
      public eventPlanerId?:_EventsUser,
      public uid?:string,
        public img?:string,
        public chefs?:string,
        public guests?:string,
        public recipe?:string,
      ) {}
    }