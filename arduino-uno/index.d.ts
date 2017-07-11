import { RivuletStream } from '@amnisio/rivulet';

export const HIGH: number;
export const LOW: number;
export const createSinks: () => Sinks;

export interface Sinks {
  D0$?: RivuletStream;
  D1$?: RivuletStream;
  D2$?: RivuletStream;
  D3$?: RivuletStream;
  D4$?: RivuletStream;
  D5$?: RivuletStream;
  D6$?: RivuletStream;
  D7$?: RivuletStream;
  D8$?: RivuletStream;
  D9$?: RivuletStream;
  D10$?: RivuletStream;
  D11$?: RivuletStream;
  D12$?: RivuletStream;
  D13$?: RivuletStream;
  LED$?: RivuletStream;
}

export interface Sources {
  D0$: RivuletStream;
  D1$: RivuletStream;
  D2$: RivuletStream;
  D3$: RivuletStream;
  D4$: RivuletStream;
  D5$: RivuletStream;
  D6$: RivuletStream;
  D7$: RivuletStream;
  D8$: RivuletStream;
  D9$: RivuletStream;
  D10$: RivuletStream;
  D11$: RivuletStream;
  D12$: RivuletStream;
  D13$: RivuletStream;
  LED$: RivuletStream;
  A0$: RivuletStream;
  A1$: RivuletStream;
  A2$: RivuletStream;
  A3$: RivuletStream;
  A4$: RivuletStream;
  A5$: RivuletStream;
}

export interface GyrusApplication {
  (sources: Sources): Sinks;
}

export const run: (application: GyrusApplication) => void;