import { Phase } from "../shared/phase";

export class UserProjectService {
  private items: Phase[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items: Phase[]){
    Array.prototype.push.apply(this.items, items);
  }
}
