export class ArrayBufferConverter {
  load(buffer) {
    this.uintl16Array = new Uint16Array(buffer);
  }

  toString() {
    this.string = "";
    for (let i = 0; i < this.uintl16Array.length; i++) {
      this.string += String.fromCharCode(this.uintl16Array[i]);
    }
    return this.string;
  }
}
