export class Message {
  constructor(private _text: string, private _type: Type) {}

  public get text() {
    return this._text;
  }

  public get type() {
    return this._type;
  }
}

export enum Type {
  Success = 'success',
  Error = 'error',
}
