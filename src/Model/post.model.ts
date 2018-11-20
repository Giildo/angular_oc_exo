export class PostModel {
  private readonly _title: string;
  private readonly _content: string;
  private _loveIt: number;
  private readonly _createdAt: Date;

  constructor(title: string, content: string, loveIt: number) {
    this._title = title;
    this._content = content;
    this._loveIt = loveIt;
    this._createdAt = new Date();
  }

  get title(): string {
    return this._title;
  }

  get content(): string {
    return this._content;
  }

  get loveIt(): number {
    return this._loveIt;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  public onLoveIt(): void {
    this._loveIt++;
  }

  public onDoNotLoveIt(): void {
    this._loveIt--;
  }
}
