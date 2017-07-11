// Type definitions for rivulet 2.2
// Project: https://github.com/AmnisIO/rivulet
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/AmnisIO/packages

interface RivuletStream {
  map: (mapper: (value: number) => number) => RivuletStream;
  mapTo: (value: number) => RivuletStream;
  filter: (predicate: (value: number) => boolean) => RivuletStream;
  take: (count: number) => RivuletStream;
  drop: (count: number) => RivuletStream;
  last: () => RivuletStream;
  sample: (input$: RivuletStream) => RivuletStream;
  delay: (delay: number) => RivuletStream;
  fold: (accumulator: (accumulated: number, current: number) => number, initial: number) => RivuletStream;
}

export const periodic: (period: number) => RivuletStream;
export const never: () => RivuletStream;
export const empty: () => RivuletStream;
