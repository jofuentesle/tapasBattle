interface _EventUser {
  _id: string,
  nombre: string,
  img: string
}

interface _EventRecipe {
  _id:string,
  nombre:string,
  img?:string,
  tasteVote?: number,
  presVote?: number,
  originVote?: number
}

export class Event {

    constructor(
        public nombre:string,
        public Date,
        public eventPlanerId?:_EventUser,
        public uid?:string,
        public img?:string,
        public chefs?:_EventUser[],
        public guests?:_EventUser[],
        public recipe?:_EventRecipe[],
      ) {}
    }