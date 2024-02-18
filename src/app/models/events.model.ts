interface _EventsUser {
  _id: string,
  nombre: string;
  img: string;
}
export class Event {

    constructor(
        public uid:string,
        public nombre:string,
        public fecha:Date,
        public eventPlanerId?:_EventsUser,
        public img?:string,
        public chefs?:string,
        public guests?:string,
        public recipe?:string,
      ) {}
    }