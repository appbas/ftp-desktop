export interface Clock {
  initPeriod: string;
  endPeriod: string;
  clockings: Clocking[];
}

export interface Clocking {
  id: string;
  date: string;
  origin: string;
  hour: number | Date | string;
  direction: string;
  referenceDate: string;
  sequence: number;
  justify: string;
  status: Status;
  isOutFence: boolean;
  hasCoordinates: boolean;
  divergent: Divergent[];
  longitude?: string;
  latitude?: string;
}

export interface Status {
  id: string;
  status: string;
}

export interface Divergent {
  label: string;
  type: string;
}
