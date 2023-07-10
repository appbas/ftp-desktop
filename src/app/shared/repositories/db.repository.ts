export interface DBRepository {
  save(object: any): void;
  get(key: any): any;
  delete(key: any): void;
  list(filter?: any): any[];
}
