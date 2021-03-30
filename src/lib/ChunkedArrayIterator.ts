
/**
 * The actual Iterator Implementation
 */
export class ChunkedArrayIterator<T> implements Iterator<Array<T>>{
    _original: Array<T>;
    _chunkSize: number;
    _offset = 0;

    constructor(original: Array<T>, chunkSize: number) {
        this._original = original;
        this._chunkSize = chunkSize;
    }

    next(): IteratorResult<Array<T>> {
        const chunk = this._original.slice(this._offset, this._offset + this._chunkSize);
        this._offset += this._chunkSize;

        return {
            done: chunk.length === 0,
            value: chunk,
        };
    }
}
