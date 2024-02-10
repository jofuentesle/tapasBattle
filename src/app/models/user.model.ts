export interface User {
    uid: string;
    email: string;
    displayName: string;
    position?:string;
    photoURL?: string;
    rols?: {
      admin:false,
      user:true
    },
    emailVerified?: boolean;
    
  }