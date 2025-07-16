import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Burger } from '../burgers-list/Burger';

const URL = 'https://68756ede814c0dfa65388b2d.mockapi.io/burgers/Burgers';

@Injectable({
  providedIn: 'root'
})

export class BurgerDataService {

  private burgersSubject = new BehaviorSubject<Burger[]>([]);
  public burgers$ = this.burgersSubject.asObservable();


  constructor(private http: HttpClient) { }

public updateBurger(burger: Partial<Burger>): Observable<any> {
  return this.http.put(`${URL}/${burger.id}`, burger);
}

  loadData() {
    this.getAll().subscribe(burgers => {
      this.burgersSubject.next(burgers);
    });
  }


  public getAll(): Observable<Burger[]> {
    return this.http.get<Burger[]>(URL)
                  .pipe(
                    tap( (burgers: Burger[]) => burgers.forEach(burger => burger.quantity = 0))
                    
                  );
  }
}
