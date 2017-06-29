// Type definitions for rivulet 1.1
// Project: https://github.com/AmnisIO/rivulet
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/AmnisIO/packages

export interface Byte extends Number {

}

interface Rivulet<T> {
  map: (mapper: (value: T) => T) => Rivulet<T>;
  mapTo: (value: T) => Rivulet<T>;
  filter: (predicate: (value: T) => boolean) => Rivulet<T>;
  take: (count: number) => Rivulet<T>;
  drop: (count: number) => Rivulet<T>;
  last: () => Rivulet<T>;
  sample: (input$: Rivulet<T>) => Rivulet<T>;
  delay: (delay: number) => Rivulet<T>;
}

export interface ByteStream extends Rivulet<Byte> {

}

export const periodic: (period: number) => ByteStream;
export const never: () => ByteStream;
export const empty: () => ByteStream;
