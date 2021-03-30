# js-chunked-array

This creates an iterable wrapper for an Array or Array-like object.  
The Chunks are not generated on initialisation, but are available through the iterator.  
Usage:
```javascript
const chunked = new ChunkedArray(originalArray, sizeOfChunks);
chunked.next() // { value: first chunk, done: true when no chunks left}
```

The chunkedArray is iterable and can be used in for..of or with the ... spread operator
```javascript
for (let chunk in chunked) {
    // do sometihng with each chunk
}
```
```javascript
const allChunks = [...chunked];
```
