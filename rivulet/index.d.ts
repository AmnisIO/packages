// Type definitions for rivulet 2.2
// Project: https://github.com/AmnisIO/rivulet
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/AmnisIO/packages

interface RivuletStream {
  /**
   * Transforms each event from the input stream through a `project` function,
   * to get a stream that emits those transformed events.
   *
   * Marble diagram:
   *
   * ```text
   * --1---3--5-----7------
   *    map(i => i * 10)
   * --10--30-50----70-----
   * ```
   *
   * @param {Function} project A function of type `(value: number) => number` that takes 
   * a number from the input stream and produces another number, to
   * be emitted on the output stream.
   * @return {RivuletStream}
   */
  map: (project: (value: number) => number) => RivuletStream;
  mapTo: (value: number) => RivuletStream;
  filter: (predicate: (value: number) => boolean) => RivuletStream;
  take: (count: number) => RivuletStream;
  drop: (count: number) => RivuletStream;
  last: () => RivuletStream;
  sample: (input$: RivuletStream) => RivuletStream;
  delay: (delay: number) => RivuletStream;
  fold: (accumulator: (accumulated: number, current: number) => number, initial: number) => RivuletStream;
}

/**
   * Creates a stream that periodically emits `0`, every
   * `period` milliseconds.
   *
   * Marble diagram:
   *
   * ```text
   *     periodic(1000)
   * ---0---0---0---0---0---...
   * ```
   *
   * @param {number} period The interval in milliseconds to use as a rate of
   * emission.
   * @return {RivuletStream}
   */
export const periodic: (period: number) => RivuletStream;
/**
   * Creates a stream that does nothing when started. It never emits any event.
   *
   * Marble diagram:
   *
   * ```text
   *          never
   * -----------------------
   * ```
   *
   * @return {RivuletStream}
   */
export const never: () => RivuletStream;
/**
   * Creates a stream that immediately emits completes when started, and that's it.
   *
   * Marble diagram:
   *
   * ```text
   * empty
   * -|
   * ```
   *
   * @return {RivuletStream}
   */
export const empty: () => RivuletStream;
