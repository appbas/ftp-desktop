import { Injectable } from '@angular/core';
import { IndexedDBRepository } from './indexeddb.repository';

@Injectable({ providedIn: 'root' })
export class ClockingRepository extends IndexedDBRepository {
  constructor() {
    super("clockings");
  }

  override save(object: any): void {
    this.objectStore?.add(object, 'sadfasdfs');
    // this.objectStore?.transaction.commit();
  }
  override get(key: any) {
    throw new Error('Method not implemented.');
  }
  override delete(key: any): void {
    throw new Error('Method not implemented.');
  }
  override list(filter?: any): any[] {
    throw new Error('Method not implemented.');
  }
}
