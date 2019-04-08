import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private pHttp: HttpClient) { }

  // Regiao de declaracao de variaveis
  private pApiPath: string = 'api/categories';

  // Regiao de metodos publicos
  getAll(): Observable<Category[]> {
    return this.pHttp.get(this.pApiPath).pipe(catchError(this.handleError), map(this.jsonDataToCategories));
  }

  getById(aId: number): Observable<Category> {
    const URL = `$(this.pApiPath)/${aId}`;
    return this.pHttp.get(URL).pipe(catchError(this.handleError), map(this.jsonDataToCategory));
  }

  create(aCategory: Category): Observable<Category> {
    return this.pHttp.post(this.pApiPath, aCategory).pipe(catchError(this.handleError), map(this.jsonDataToCategory));
  }

  update(aCategory: Category): Observable<Category> {
    const URL = `$(this.pApiPath)/${aCategory.id}`;
    return this.pHttp.put(URL, aCategory).pipe(catchError(this.handleError), map(() => aCategory));;
  }

  delete(aId: number): Observable<any> {
    const URL = `$(this.pApiPath)/${aId}`;
    return this.pHttp.delete(URL).pipe(catchError(this.handleError), map(() => null));
  }

  // Regiao de metodos privados
  private jsonDataToCategories(aJSONData: any[]): Category[] {
    const categories: Category[] = [];
    aJSONData.forEach(element => categories.push(element as Category));
    return categories;
  };

  private jsonDataToCategory(aJSONData: any): Category {
    return aJSONData as Category;
  };

  private handleError(aError: any): Observable<any> {
    console.log('Erro na requisicao => ', aError);
    return throwError(aError);
  }

}
