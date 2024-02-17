export class Event {

    constructor(
        public uid:string,
        public eventPlanerId:string,
        public nombre:string,
        public fecha:Date,
        public img?:string,
        public chefs?:string,
        public guests?:string,
        public recipe?:string,
      ) {}
    }