export class Multiplication {
  base: number;
 
  constructor(base: number) {
    this.base = base;
  }
 
  value(items: number) {
    return items * this.base;
  }
}