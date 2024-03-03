interface _Vote {
    _id: string,
    vote: number,
    guestId: string
  }
  
  export class Recipe {
  
      constructor(
        public uid: String,
        public nombre:String,
        public tasteVote?:_Vote[],
        public presVote?:_Vote[],
        public originVote?:_Vote[],
        public img?:String,
        public uidChef?: String
        ) {}
      }