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

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero).pipe(
      tap((hero) => {
        this.log(`created ${this.descHero(hero)}`);
      }),
      first()
    );
  }

  getById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.getUrl(id)}`).pipe(
      tap((hero) => {
        this.log(`fetched ${this.descHero(hero)}`);
      }),
      first()
    );
  }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes) => {
        this.log(`fetched ${heroes.length} hero(es) `);
      }),
      first()
    );
  }

  update(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.getUrl(hero.id)}`, hero).pipe(
      tap(() => {
        this.log(`updated ${this.descHero(hero)}`);
      }),
      first()
    );
  }

  delete(hero: Hero): Observable<any> {
    return this.http.delete<any>(`${this.getUrl(hero.id)}`).pipe(
      tap(() => {
        this.log(`deleted ${this.descHero(hero)}`);
      }),
      first()
    );
  }

  private getUrl(id: number): string {
    return `${this.heroesUrl}/${id}`;
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private descHero(hero: Hero): string {
    return `hero id = ${hero.id} and name = ${hero.name}`;
  }
}
