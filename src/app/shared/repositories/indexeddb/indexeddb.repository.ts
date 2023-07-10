
import { Injectable } from '@angular/core';
import { DBRepository } from '../db.repository';

export class IndexedDBRepository implements DBRepository {

  #db: IDBDatabase | undefined;
  #transaction: IDBTransaction | undefined;

  constructor(public store: string) {
    if (indexedDB) {
      const request: IDBOpenDBRequest = indexedDB.open('pontoDB', 1);
      request.onupgradeneeded = (event: Event) => {
        this.#db = (event.target as any).result as IDBDatabase;
        if (!this.#db.objectStoreNames.contains(store)) {
          this.#transaction = this.#db.createObjectStore(store).transaction;
        }
      };

      request.onsuccess = (event) => {
        this.#db = (event.target as any).result as IDBDatabase;
        console.log('success');
      };
    }
  }

  save(object: any): void {
    throw new Error('Method not implemented.');
  }
  get(key: any) {
    throw new Error('Method not implemented.');
  }
  delete(key: any): void {
    throw new Error('Method not implemented.');
  }
  list(filter?: any): any[] {
    throw new Error('Method not implemented.');
  }

  get db(): IDBDatabase | undefined {
    return this.#db;
  }

  get transaction(): IDBTransaction | undefined {
    return this.#db?.transaction(this.store, "readwrite");;
  }

  get objectStore(): IDBObjectStore | undefined {
    return this.transaction?.objectStore(this.store);
  }
}
