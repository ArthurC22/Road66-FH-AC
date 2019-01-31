import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {Chapter} from './model/Chapter.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {

  constructor(private http: HttpClient) {}

  getChapter(): Observable<any> {
    return this.http.get('./assets/chapters.json', {responseType: 'json'});
}

}
