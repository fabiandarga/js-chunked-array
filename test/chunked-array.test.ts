import { ChunkedArray } from '../src';

describe('ChunkedArray', () => {
  it('return an iterable', () => {
    const chunkedArray = new ChunkedArray([], 10);
    expect(chunkedArray[Symbol.iterator]).toBeInstanceOf(Function);
  });

  it('iterates chunks', () => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const chunkedArray = new ChunkedArray(alphabet, 10);

    const chunks = [...chunkedArray];
    expect(chunks.length).toEqual(3);
    expect(chunks[2]).toEqual(['u', 'v', 'w', 'x', 'y', 'z'])
  });
});
