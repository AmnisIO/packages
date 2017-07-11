// Type definitions for rivulet 2.2
// Project: https://github.com/AmnisIO/rivulet
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/AmnisIO/packages

export interface Int extends Number {

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
  fold: (accumulator: (accumulated: number, current: number) => number, initial: number) => Rivulet<T>;
}

export interface IntStream extends Rivulet<Int> {

}

export const periodic: (period: number) => IntStream;
export const never: () => IntStream;
export const empty: () => IntStream;
