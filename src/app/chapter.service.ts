import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {Chapter} from './model/Chapter.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {

  constructor(private http: HttpClient) {}

  getJsonFile(): Observable<any> {
    return this.http.get('./assets/chapters.json', {responseType: 'json'});
  }

}
