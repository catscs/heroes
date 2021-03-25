import { Type, Message } from './../../heroes/models/message.model';

export const getMessage = (text: string, type: Type): Message => {
  return { text, type };
};
