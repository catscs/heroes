export interface Message {
  text: string;
  type: Type;
}

export enum Type {
  Success = 'success',
  Error = 'error',
}
