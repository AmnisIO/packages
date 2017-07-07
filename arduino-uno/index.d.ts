import { IntStream, Int } from '@amnisio/rivulet';

export const HIGH: Int;
export const LOW: Int;
export const createSinks: () => Sinks;

export interface Sinks {
  D0$?: IntStream;
  D1$?: IntStream;
  D2$?: IntStream;
  D3$?: IntStream;
  D4$?: IntStream;
  D5$?: IntStream;
  D6$?: IntStream;
  D7$?: IntStream;
  D8$?: IntStream;
  D9$?: IntStream;
  D10$?: IntStream;
  D11$?: IntStream;
  D12$?: IntStream;
  D13$?: IntStream;
  LED$?: IntStream;
}

export interface Sources {
  D0$: IntStream;
  D1$: IntStream;
  D2$: IntStream;
  D3$: IntStream;
  D4$: IntStream;
  D5$: IntStream;
  D6$: IntStream;
  D7$: IntStream;
  D8$: IntStream;
  D9$: IntStream;
  D10$: IntStream;
  D11$: IntStream;
  D12$: IntStream;
  D13$: IntStream;
  LED$: IntStream;
  A0$: IntStream;
  A1$: IntStream;
  A2$: IntStream;
  A3$: IntStream;
  A4$: IntStream;
  A5$: IntStream;
}

export interface GyrusApplication {
  (sources: Sources): Sinks;
}

export const run: (application: GyrusApplication) => void;