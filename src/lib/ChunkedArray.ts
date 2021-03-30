import {ChunkedArrayIterator} from "./ChunkedArrayIterator";

/**
 * Separates the original array in chunks of n size.
 * The built-in iterator returns these slices.
 *
 * e.g.:
 * const chunkedArray = new ChunkedArray([1,2,3,4,5,6,7,8,9,0], 3);
 * for (let chunk of chunkedArray) {
 *   console.log(chunk); // prints "[1, 2, 3]" -> "[4, 5, 6]" ->  "[7, 8, 9]" -> "[0]"
 * }
 */
export class ChunkedArray<T>{
  constructor(private original: Array<T>, private chunkSize: number) {
  }

  [Symbol.iterator](): Iterator<Array<T>> {
    return new ChunkedArrayIterator(this.original, this.chunkSize);
  }
}
