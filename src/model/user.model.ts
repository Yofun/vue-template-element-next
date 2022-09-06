export interface User
  extends Readonly<{
    name: string;
    age: number;
    sex: string;
  }> {}
