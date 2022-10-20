import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable().pipe();

  hide(): void {
    this.loadingSubject.next(false);
  }
  show(): void {
    this.loadingSubject.next(true);
  }
}
