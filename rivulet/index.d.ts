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
  /**
   * It's like `map`, but transforms each input to always the same
   * constant value on the output stream.
   *
   * Marble diagram:
   *
   * ```text
   * --1---3--5-----7-----
   *       mapTo(10)
   * --10--10-10----10----
   * ```
   *
   * @param value A value to emit on the output stream whenever the
   * input stream emits any value.
   * @return {RivuletStream}
   */
  mapTo: (value: number) => RivuletStream;
  /**
   * Only allows events that pass the test given by the `passes` argument.
   *
   * Each event from the input stream is given to the `predicate` function. If the
   * function returns `true`, the event is forwarded to the output stream,
   * otherwise it is ignored and not forwarded.
   *
   * Marble diagram:
   *
   * ```text
   * --1---2--3-----4-----5---6--7-8--
   *     filter(i => i % 2 === 0)
   * ------2--------4---------6----8--
   * ```
   *
   * @param {Function} predicate A function of type `(value: number) => boolean` that takes
   * an event from the input stream and checks if it passes, by returning a
   * boolean.
   * @return {RivuletStream}
   */
  filter: (predicate: (value: number) => boolean) => RivuletStream;
  /**
   * Lets the first `count` many events from the input stream pass to the
   * output stream, then makes the output stream complete.
   *
   * Marble diagram:
   *
   * ```text
   * --a---b--c----d---e--
   *    take(3)
   * --a---b--c|
   * ```
   *
   * @param {number} count How many events to allow from the input stream
   * before completing the output stream.
   * @return {RivuletStream}
   */
  take: (count: number) => RivuletStream;
  /**
   * Ignores the first `count` many events from the input stream, and then
   * after that starts forwarding events from the input stream to the output
   * stream.
   *
   * Marble diagram:
   *
   * ```text
   * --a---b--c----d---e--
   *       drop(3)
   * --------------d---e--
   * ```
   *
   * @param {number} count How many events to ignore from the input stream
   * before forwarding all events from the input stream to the output stream.
   * @return {RivuletStream}
   */
  drop: (count: number) => RivuletStream;
  /**
   * When the input stream completes, the output stream will emit the last event
   * emitted by the input stream, and then will also complete.
   *
   * Marble diagram:
   *
   * ```text
   * --a---b--c--d----|
   *       last()
   * -----------------d|
   * ```
   *
   * @return {RivuletStream}
   */
  last: () => RivuletStream;
  /**
   * Samples an input stream and emits the latest event from the input stream
   * whenever this stream emits an event.
   * 
   * Marble diagram:
   * 
   * ```text
   * ----------0----0-|
   *       sample(
   * --a---b--c--d----|
   *       )
   * ----------c----d-|
   * ```
   * 
   * @param {RivuletStream} input$ The input stream to sample
   * @return {RivuletStream}
   */
  sample: (input$: RivuletStream) => RivuletStream;
  /**
 * Delays periodic events by a given time period.
 *
 * Marble diagram:
 *
 * ```text
 * 1----2--3--4----5|
 *     delay(60)
 * ---1----2--3--4----5|
 * ```
 *
 * @param {number} period The amount of silence required in milliseconds.
 * @return {RivuletStream}
 */
  delay: (period: number) => RivuletStream;
  /**
   * "Folds" the stream onto itself.
   *
   * Combines events from the past throughout the entire execution of the
   * input stream, allowing you to accumulate them together. It's essentially
   * like `Array.prototype.reduce`.
   *
   * The output stream starts by emitting the `seed` which you give as argument.
   * Then, when an event happens on the input stream, it is combined with that
   * seed value through the `accumulate` function, and the output value is
   * emitted on the output stream. `fold` remembers that output value as `accumulated`,
   * and then when a new input event `value` happens, `accumulated` will be
   * combined with that to produce the new `accumulated` and so forth.
   *
   * Marble diagram:
   *
   * ```text
   * ------1-----1--2----1----1------
   *   fold((acc, x) => acc + x, 3)
   * 3-----4-----5--7----8----9------
   * ```
   *
   * @param {Function} accumulate A function of type `(accumulated: number, value: number) => number` that
   * takes the previous accumulated value `accumulated` and the incoming event from the
   * input stream and produces the new accumulated value.
   * @param seed The initial accumulated value, of type `number`.
   * @return {RivuletStream}
   */
  fold: (accumulate: (accumulated: number, value: number) => number, seed: number) => RivuletStream;
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
