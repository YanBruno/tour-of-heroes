import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.base_url}/heroes`;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap((hero) => {
        this.log(`fetched hero id = ${hero.id} and name = ${hero.name}`);
      }),
      first()
    );
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes) => {
        this.log(`fetched ${heroes.length} hero(es) `);
      }),
      first()
    );
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
