export interface IElectronAPI {
  doThing: () => Promise<void>;
}

declare global {
  interface Window {
    engeetec: IElectronAPI;
  }
}
